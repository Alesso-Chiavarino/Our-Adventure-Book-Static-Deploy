import { createContext, useContext, useState, getTicketsRequest, getTicketRequest, createTicketRequest, updateTicketRequest, deleteTicketRequest } from '../import'

const TicketContext = createContext();

export const useTicket = () => {
    return useContext(TicketContext);
}

const TicketProvider = ({ children }) => {

    const [tickets, setTickets] = useState([])

    const getTickets = async (page) => {
        const result = await getTicketsRequest(page)
        setTickets(result.data)
    }

    const getTicket = async (id) => {
        const result = await getTicketRequest(id)
        return result.data
    }

    const createTicket = async (ticket) => {
        const result = await createTicketRequest(ticket)
        setTickets([...tickets.docs, result.data])
    }

    const updateTicket = async (id, ticket) => {
        const result = await updateTicketRequest(id, ticket)
        const newTickets = await getTickets()
        setTickets(newTickets.data)
    }

    const deleteTicket = async (id) => {
        const result = await deleteTicketRequest(id)
        setTickets(tickets.filter(ticket => ticket._id !== id));
    }

    return (
        <TicketContext.Provider value={{ tickets, getTickets, getTicket, createTicket, updateTicket, deleteTicket }}>
            {children}
        </TicketContext.Provider>
    )
}

export default TicketProvider;