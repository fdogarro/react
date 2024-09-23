import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createTicket, reset } from '../features/tickets/ticketSlice';
import BackButton from '../components/BackButton';

const NewTicket = () => {
    const { user } = useSelector((state) => state.auth);
    const { isError, isSuccess, message } = useSelector(
        (state) => state.ticket);
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(isError){
            console.log(message);
        }

        if(isSuccess){
            // dispatch(reset());
            // navigate('/tickets');
        }

        dispatch(reset())
    }, [dispatch, isError, isSuccess, navigate, message])

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(createTicket({ topic, description}))
    }
    

    
    return (
        <div>
            <BackButton url="/"/>
            <section>
                <h2>Create New Topic</h2>
                <p>Please fill out the form below</p>
            </section>
            <section>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">User Name</label>
                    <input type="text" className="form-control" value={name} disabled/>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">User Email</label>
                    <input type="text" className="form-control" value={email} disabled/>
                </div>
                
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="topic" className="form-label">Topic</label>
                        <input type="text" className="form-control" value={topic} onChange={(e) => setTopic(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea 
                            name="description" 
                            id="description" 
                            cols="30" 
                            rows="10"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block btn-primary">Submit</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default NewTicket
