import './TicketDetail.scss';
import { useTicket, useEffect, useRef, useState, useParams } from '../../import';

const TicketDetail = () => {

    const { getTicket } = useTicket()

    const { id } = useParams();
    const [ticket, setTicket] = useState({})
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const loadTicket = async () => {
            try {
                const res = await getTicket(id);
                setTicket(res);
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoader(false);
            }
        }
        loadTicket();
    }, [])

    const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg) translateZ(0) ')

    const wrapperRef = useRef(null);
    const ticketRef = useRef(null);

    const { width, height } = wrapperRef.current
        ? wrapperRef.current.getBoundingClientRect()
        : { width: 0, height: 0 };

    const halfWidth = width / 2;
    const halfHeight = height / 2;

    const detectMobileDevice = () => {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
        //true => mobile || false => desktop
    };


    const handleMouseMove = (e) => {
        ticketRef.current.style.transform = transform;
        const { offsetX } = e.nativeEvent;
        const { offsetY } = e.nativeEvent;

        const rotationX = ((offsetY - halfHeight) / halfHeight) * -10;

        const rotationY = ((offsetX - halfWidth) / halfWidth) * 10;

        const depth = ((offsetY - halfHeight) / halfHeight) * 10;

        setTransform(`rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateZ(${depth}px) scale(1.1)`)

    }

    const handleTouchMove = (e) => {

        ticketRef.current.style.transform = transform;

        const { clientX } = e.touches[0];
        const { clientY } = e.touches[0];

        const rotationX = ((clientY - halfHeight) / halfHeight) * -10;
        const rotationY = ((clientX - halfWidth) / halfWidth) * 10;
        const depth = ((clientY - halfHeight) / halfHeight) * 10;

        setTransform(`rotateX(${rotationX}deg) rotateY(${rotationY}deg) translateZ(${depth}px) scale(1.1)`)
    }

    const [start, setStart] = useState({ x: 0, y: 0 });

    const handleTouchStart = (e) => {
        // e.preventDefault()
        setStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    };

    const handleTouchEnd = () => {
        setTransform(`rotateX(0deg) rotateY(0deg) translateZ(0)`);
        ticketRef.current.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0) `;
    };

    const renderMain = () => {

        if (detectMobileDevice()) {
            return (
                //mobile
                <div className="ticket-detail flex justify-center mx-5">
                    <div
                        className="wrapper"
                        ref={wrapperRef}
                        onTouchStart={(e) => handleTouchStart(e)}
                        onTouchMove={(e) => handleTouchMove(e)}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="ticket-mobile" ref={ticketRef}>
                            <article className="ticket-mobile bg-slate-50 flex flex-col">

                                <div className="right px-2 py-5">
                                    <h3 className='text-5xl font-semi-bold'>{ticket.title}</h3>
                                    <span>solo valido para:</span>
                                    <div className="flex gap-5">
                                        <span className='text-2xl'>{ticket.date}</span>
                                        <span className='text-2xl'>{ticket.hour}</span>
                                    </div>
                                    <h4 className='text-3xl'>Sala {ticket.room}</h4>
                                    <div className="flex gap-1 items-end">
                                        <span className='text-2xl'>Asiento:</span>
                                        <h4 className='text-4xl'>{ticket.seat}</h4>

                                    </div>
                                    <div className="flex gap-5">
                                        <span className='text-xl'>SHMAS2D</span>
                                        <span className='text-xl font-semibold'>${ticket.price}</span>
                                    </div>
                                </div>

                                <div className="left">
                                    <div className='py-10'>
                                        <h3 className='text-gray-400 font-semibold mb-5 text-3xl'>SHOWCASE</h3>
                                        <div className="icon flex flex-col items-center justify-center">
                                            <span className='text-gray-500 text-md font-bold'>SHOWCASE</span>
                                            <span className='text-blue-300 font-bold text-3xl'>IMAX</span>
                                            <span className='text-gray-500 text-md theatre font-bold'>THEATRE</span>
                                        </div>
                                    </div>
                                </div>


                            </article>
                            <div className="bg"></div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                //desktop
                <div className="ticket-detail flex justify-center mx-5">
                    <div
                        className="wrapper"
                        ref={wrapperRef}
                        onMouseMove={(e) => handleMouseMove(e)}
                        onMouseLeave={() => {
                            setTransform(`rotateX(0deg) rotateY(0deg) translateZ(0)`)
                            ticketRef.current.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0) `;
                        }}
                    >
                        <div className='p-10 ticket-father' ref={ticketRef}>
                            <div className="ticket">
                                <article className="ticket bg-slate-50 grid grid-cols-2">
                                    <div className="left">
                                        <div className='rotate'>
                                            <h3 className='text-gray-400 font-semibold mb-5 text-3xl'>SHOWCASE</h3>
                                            <div className="icon flex flex-col items-center justify-center">
                                                <span className='text-gray-500 text-md font-bold'>SHOWCASE</span>
                                                <span className='text-blue-300 font-bold text-3xl'>IMAX</span>
                                                <span className='text-gray-500 text-md theatre font-bold'>THEATRE</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="right p-2">
                                        <h3 className='text-5xl font-semi-bold'>{ticket.title}</h3>
                                        <span>solo valido para:</span>
                                        <div className="flex gap-5">
                                            <span className='text-2xl'>{ticket.date}</span>
                                            <span className='text-2xl'>{ticket.hour}</span>
                                        </div>
                                        <h4 className='text-3xl'>Sala {ticket.room}</h4>
                                        <div className="flex gap-1 items-end">
                                            <span className='text-2xl'>Asiento:</span>
                                            <h4 className='text-4xl'>{ticket.seat}</h4>

                                        </div>
                                        <div className="flex gap-5">
                                            <span className='text-xl'>SHMAS2D</span>
                                            <span className='text-xl font-semibold'>${ticket.price}</span>
                                        </div>
                                    </div>


                                </article>
                            </div>
                            <div className="bg"></div>
                        </div>
                    </div>
                </div>
            )

        }
    }

    return (

        <section className='ticket-detail-container'>
            <main className='container mx-auto'>
                {loader ?
                    <div className='flex items-center justify-center'>
                        <span className='loader-ticket collapse'></span>
                        <h1 className='title '>Our Ticket</h1>
                        <span className='loader-ticket'></span>
                    </div>
                    :
                    <div className='flex items-center justify-center'>
                        <span className='loader-ticket collapse'></span>
                        <h1 className='title mx-auto '>Our Ticket</h1>
                        <span className='loader-ticket collapse'></span>
                    </div>}
                {renderMain()}
            </main>
        </section>
    );
};

export default TicketDetail;