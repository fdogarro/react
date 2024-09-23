import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { closeTicket, getTicket } from '../features/tickets/ticketSlice';
import { getNotes, createNote, reset as notesReset } from '../features/notes/noteSlice';
import BackButton from '../components/BackButton';
import NoteItem from '../components/NoteItem';

Modal.setAppElement('#root');

const Ticket = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [noteText, setNoteText] = useState('');
    const { ticket, isLoading, isSuccess, isError, message } = 
    useSelector((state) => state.ticket);

    const { notes } = 
    useSelector((state) => state.notes);

    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { ticketId } = useParams();

    useEffect(() => {
        if(isError){
            console.log(message);
        }

        dispatch(getTicket(ticketId));
        dispatch(getNotes(ticketId));
    }, [isError, message, ticketId])

    if(isError){
        return <h3>Something Went Wrong</h3>
    }

    const onTicketClose = () => {
        dispatch(closeTicket(ticketId))
        navigate('/tickets')
    }

    const onNoteSubmit = (e) => {
        e.preventDefault()
        dispatch(createNote({noteText, ticketId}))
        closeModal()
    }

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <div>
            <header>
                <BackButton url='/tickets'/>
                {/* <h2>Topic</h2> */}
                <hr />

                <div className="card">
                    <div className="card-header">
                        <h5>Topic</h5>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{ticket.topic}</h5>
                        <p className="card-text">{ticket.description}</p>
                        {/* <a href="#" className="btn btn-primary">Go</a> */}
                    </div>
                </div>
                {/* <h2>Ticket ID: {ticket._id}</h2> */}
                <span className={`status status-${ticket.status}`}>
                    {ticket.status}
                </span>
                {/* <h3>Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}</h3> */}
                <hr />
                
                {/* <div className="ticket-desc">
                    <h3>Description</h3>
                    <p>{ticket.description}</p>
                </div> */}

                {ticket.status !== 'closed' && (
                    <button 
                        onClick={openModal} 
                        className='btn'>
                        <FaPlus /> Add Note
                    </button>
                )}

                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel='Add Note'>
                    <h2>Add Note</h2>
                    <button className='btn-close' onClick={closeModal}>X</button>
                    <form onSubmit={onNoteSubmit}>
                        <div className="form-group">
                            <textarea 
                                name="noteText" 
                                id="noteText" 
                                className="form-control"
                                placeholder="Note text"
                                value={noteText}
                                onChange={(e) => setNoteText(e.target.value)}
                                cols="30" 
                                rows="10">
                            </textarea>
                        </div>
                        <div className="form-group">
                            <button 
                                className="btn" 
                                type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </Modal>

                {notes.map((note) => (
                    <NoteItem key={note._id} note={note}/>
                ))}

                {ticket.status !== 'closed' && (
                <button
                    onClick={onTicketClose} 
                    className="btn btn-block btn-danger"
                >
                    Close Ticket
                </button>
            )}
            </header>
            
            
        </div>
    )
}

export default Ticket
