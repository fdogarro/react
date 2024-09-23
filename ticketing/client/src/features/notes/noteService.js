import axios from 'axios';

const API_URL = 'http://localhost:8000/api/tickets/';


const getNotes = async (ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + ticketId + '/notes', config);

    console.log("Response", response);

    return response.data;
}

const createNote = async (noteText, ticketId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(
        API_URL + ticketId + '/notes', 
        {
            text: noteText,
        },
        config
    );

    console.log("Response", response);

    return response.data;
}

const noteService = {
    getNotes,
    createNote
}

export default noteService;