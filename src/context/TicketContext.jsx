import { createContext, useContext, useState, getTicketsRequest, getTicketRequest, createTicketRequest, updateTicketRequest, deleteTicketRequest } from '../import'

const TicketContext = createContext();

export const useTicket = () => {
    return useContext(TicketContext);
}

const TicketProvider = ({ children }) => {

    const [tickets, setTickets] = useState([])

    const getTickets = async () => {
        const result = await getTicketsRequest()
        setTickets(result.data)
    }

    const getTicket = async (id) => {
        const result = await getTicketRequest(id)
        return result.data
    }

    return (
        <TicketContext.Provider value={{ tickets, getTickets, getTicket }}>
            {children}
        </TicketContext.Provider>
    )
}

export default TicketProvider;