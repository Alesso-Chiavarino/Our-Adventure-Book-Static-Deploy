// import Ticket from '../Ticket/Ticket';
import './TicketsContainer.scss';
import { useTicket, useEffect, useState, Ticket, IoIosCreate, Link } from '../../import';


const TicketsContainer = () => {

    const { getTickets, tickets } = useTicket()
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const loadTickets = async () => {
            try {
                if(!tickets.length) {
                    return await getTickets(1);
                }

                setLoader(false);
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

    const handlePrevius = async () => {
        if (tickets.hasPrevPage) {
            await getTickets(tickets.prevPage)
        }
    }

    const handleNext = async () => {
        if (tickets.hasNextPage) {
            await getTickets(tickets.nextPage)
        }
    }


    return (
        <section className='tickets-container-section'>
            <main className='container mx-auto'>
                <h1 className='tickets-container-title pt-5'>Our Tickets</h1>
                <div className='mx-5'>
                    <div className="flex justify-between items-center">
                        <Link to='/tickets/form'>
                            <span className='flex bg-green-500 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer hover:bg-green-400'><IoIosCreate className='mb-1' />Create a Ticket</span>
                        </Link>
                        <div className="flex gap-8 my-5 ">


                            {tickets.hasPrevPage ?
                                <button className='flex bg-green-500 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer w-20 hover:bg-green-600' onClick={handlePrevius}>Previus</button>
                                :
                                <button className='flex bg-green-900 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer w-20 hover:bg-green-800' onClick={handlePrevius}>Previus</button>
                            }

                            {tickets.hasNextPage ?
                                <button className='flex bg-green-500 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer w-20 hover:bg-green-600' onClick={handleNext}>Next</button>
                                :
                                <button className='flex bg-green-900 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer w-20 hover:bg-green-800'>Next</button>}


                        </div>
                    </div>
                    <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {tickets.docs?.map(tic => (
                            <li key={tic._id}>
                                <Ticket {...tic} />
                            </li>
                        ))}
                    </ul>
                </div>
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