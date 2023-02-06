import './TicketForm.scss';
import { useState, useEffect, useTicket, TbArrowBackUp, useParams, useNavigate } from '../../import'

const TicketForm = () => {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [room, setRoom] = useState('');
    const [seat, setSeat] = useState('');
    const [price, setPrice] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);

    const { createTicket, getTicket, updateTicket } = useTicket();

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const editHandler = async () => {
            try {
                if (params.id) {
                    const res = await getTicket(params.id);
                    setTitle(res.title);
                    setDate(res.date);
                    setHour(res.hour);
                    setRoom(res.room);
                    setSeat(res.seat);
                    setPrice(res.price);
                }
            }
            catch (err) {
                console.log('error fetching the data: \n', err);
            }
        }
        editHandler();
    })

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleHour = (e) => {
        setHour(e.target.value);
    }

    const handleRoom = (e) => {
        setRoom(e.target.value);
    }

    const handleSeat = (e) => {
        setSeat(e.target.value);
    }

    const handlePrice = (e) => {
        setPrice(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (params.id) {
            setIsSubmit(true);
            await updateTicket(params.id, {
                title,
                date,
                hour,
                room,
                seat,
                price,
            })
            navigate(-1);
            return;
        }

        setIsSubmit(true);
        await createTicket({
            title,
            date,
            hour,
            room,
            seat,
            price,
        });
        setTitle('');
        setDate('');
        setHour('');
        setRoom('');
        setSeat('');
        setPrice('');
        navigate(-1);
    }

    const handleArea = () => {
        if (params.id) {
            return handleButtons2()
        }
        return handleButtons()
    }

    const handleButtons = () => {
        if (isSubmit) {
            return (
                <div className='bg-gradient-to-tr from-blue-400 to-green-400 p-[2px] rounded-md overflow-hidden mt-5 '>
                    <button type="submit" className="text-white bg-black px-3 py-1 rounded-md hover:px-5 transition-all " onClick={handleSubmit}>Submiting...</button>
                </div>
            )
        } else {
            return (
                <div className='bg-gradient-to-tr from-blue-400 to-green-400 p-[2px] rounded-md overflow-hidden mt-5 '>
                    <button type="submit" className="text-white bg-black px-3 py-1 rounded-md hover:px-5 transition-all " onClick={handleSubmit}>Submit</button>
                </div>
            )
        }
    }

    const handleButtons2 = () => {

        if (isSubmit) {
            return (
                <div className='bg-gradient-to-tr from-blue-400 to-green-400 p-[2px] rounded-md overflow-hidden mt-5 '>
                    <button type="submit" className="text-white bg-black px-3 py-1 rounded-md hover:px-5 transition-all " onClick={handleSubmit}>Updating...</button>
                </div>
            )
        } else {
            return (
                <div className='bg-gradient-to-tr from-blue-400 to-green-400 p-[2px] rounded-md overflow-hidden mt-5 '>
                    <button type="submit" className="text-white bg-black px-3 py-1 rounded-md hover:px-5 transition-all " onClick={handleSubmit}>Update</button>
                </div>
            )
        }
    }

    return (
        <section className='ticket-form-section'>
            <main className='container mx-auto'>
                {params.id ? <h1 className='form-title'>Edit Ticket</h1> : <h1 className='form-title'>Create Ticket</h1>}
                <div className='flex justify-center mx-5 md:mx-0'>
                    <div className='bg-gradient-to-r from-blue-400 to-green-400 p-1 rounded-md overflow-hidden shadow-blue-400 shadow-md w-[50em] relative '>
                        <TbArrowBackUp className='text-xl text-white absolute top-3 left-3 cursor-pointer hover:text-gray-50' onClick={() => navigate(-1)} />
                        <div className='form-container-ticket bg-black p-5'>
                            <span className='text-white go-back-icon'>  </span>
                            <form action="">

                                {params.id ? <h3 className='font-extrabold text-transparent text-[1.6em] bg-clip-text bg-gradient-to-r from-blue-400 to-green-600'>Edit a Ticket</h3> : <h3 className='font-extrabold text-transparent text-[1.6em] bg-clip-text bg-gradient-to-r from-blue-400 to-green-600'>Create a Ticket</h3>}

                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" defaultValue={title} placeholder='Type the movie title' onChange={handleTitle} />
                                </div>

                                <div className="grid grid-cols-2 gap-5 w-full">
                                    <div className="form-group">
                                        <label htmlFor="title">Date</label>
                                        <input type="text" className="form-control" defaultValue={date} placeholder='Type the movie date' onChange={handleDate} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="title">Hour</label>
                                        <input type="text" className="form-control" defaultValue={hour} placeholder='Type the movie hour' onChange={handleHour} />
                                    </div>
                                </div>


                                <div className="grid grid-cols-3 w-full gap-5">

                                    <div className="form-group">
                                        <label htmlFor="title">Room</label>
                                        <input type="text" className="form-control" defaultValue={room} placeholder='Type the movie room' onChange={handleRoom} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="title">Seat</label>
                                        <input type="text" className="form-control" defaultValue={seat} placeholder='Type the room seat' onChange={handleSeat} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="title">Price</label>
                                        <input type="text" className="form-control" defaultValue={price} placeholder='Type the ticket price ' onChange={handlePrice} />
                                    </div>

                                </div>

                                {handleArea()}

                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section >
    )
}

export default TicketForm;
