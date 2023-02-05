import { Link } from '../../import'
import './Ticket.scss';

const Ticket = ({ title, date, hour, room, seat, price, _id }) => {
    return (
        <Link to={`/tickets/detail/${_id}`} className='ticket-container'>
            <article className="ticket bg-slate-50 grid grid-cols-2">
                <div className="left">
                    <div className='rotate'>
                        <h3 className='text-gray-500 font-bold mb-5'>SHOWCASE</h3>
                        <div className="icon flex flex-col items-center justify-center">
                            <span className='text-gray-500 text-xs font-bold'>SHOWCASE</span>
                            <span className='text-blue-300 font-bold text-xl'>IMAX</span>
                            <span className='text-gray-500 text-xs theatre font-bold'>THEATRE</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h3 className='text-xl'>{title}</h3>
                    <span>solo valido para:</span>
                    <div className="flex gap-5">
                        <span>{date}</span>
                        <span>{hour}</span>
                    </div>
                    <h4 className='text-xl'>Sala {room}</h4>
                    <div className="flex gap-5">
                        <span>Asiento:</span>
                        <h4>{seat}</h4>

                    </div>
                    <div className="flex gap-5">
                        <span>SHMAS2D</span>
                        <span>${price}</span>
                    </div>
                </div>
            </article>
        </Link>
    )
}

export default Ticket;