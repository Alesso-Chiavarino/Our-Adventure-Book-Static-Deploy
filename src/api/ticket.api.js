import axios from 'axios'

export const getTicketsRequest = async () => {
    return await axios.get(`https://our-adventure-book-api-rest.onrender.com/api/tickets`);
    // return await axios.get('http://localhost:4000/tickets');
}

export const getTicketRequest = async (id) => {
    return await axios.get(`https://our-adventure-book-api-rest.onrender.com/api/tickets/${id}`);
    // return await axios.get(`http://localhost:4000/tickets/${id}`);
}

export const createTicketRequest = async (ticket) => {
    return await axios.get(`https://our-adventure-book-api-rest.onrender.com/api/tickets`, ticket);
    // return await axios.post('http://localhost:4000/tickets', ticket);
}

export const updateTicketRequest = async (id, ticket) => {
    return await axios.get(`https://our-adventure-book-api-rest.onrender.com/api/tickets/${id}`, ticket);
    // return await axios.put(`http://localhost:4000/tickets/${id}`, ticket);
}

export const deleteTicketRequest = async (id) => {
    return await axios.get(`https://our-adventure-book-api-rest.onrender.com/api/tickets/${id}`);
    // return await axios.delete(`http://localhost:4000/tickets/${id}`);
}