import { useSelector } from 'react-redux';

const NoteItem = ({note}) => {
    const { user } = useSelector((state) => state.auth);
    return (
        <>
            <h4>Note from {note.isStaff ? <span>Staff</span>: <span>{user.name}</span>}</h4>
            <p>{note.text}</p>
            <div className="note-date">
                {new Date(note.createdAt).toLocaleString('en-US')}
            </div>
        </>
    )
}

export default NoteItem
