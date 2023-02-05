// import Ticket from '../Ticket/Ticket';
import './TicketsContainer.scss';
import { useTicket, useEffect, useState, Ticket } from '../../import';


const TicketsContainer = () => {

    const { getTickets, tickets } = useTicket()
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const loadTickets = async () => {
            try {
                await getTickets();
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoader(false);
            }
        }
        loadTickets();
    }, [])

    // //pages
    // console.log(tickets.docs)
    // //ticket
    // console.log(tickets.docs)

    return (
        <section className='tickets-container-section'>
            <main className='container mx-auto'>
                <h1 className='tickets-container-title pt-5'>Our Tickets</h1>
                <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5">
                        {tickets.docs?.map(tic => (
                            <li key={tic._id}>
                                <Ticket {...tic} />
                            </li>
                        ))}
                    </ul>
                {/* {!loader ?
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 mx-5">
                        <span class="loader-ticket"></span>
                        <span class="loader-ticket"></span>
                        <span class="loader-ticket"></span>
                        <span class="loader-ticket"></span>
                        <span class="loader-ticket"></span>
                        <span class="loader-ticket"></span>
                        <span class="loader-ticket"></span>
                        <span class="loader-ticket"></span>
                    </div>
                    :
                    <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5">
                        {tickets.docs?.map(tic => (
                            <li key={tic._id}>
                                <Ticket {...tic} />
                            </li>
                        ))}
                    </ul>} */}
            </main>
        </section>
    )
}

export default TicketsContainer;