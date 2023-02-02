import { Link } from '../../import'
import './TimelineAdventure.scss';

const TimelineAdventure = ({ title, description, image, _id }) => {

    const limitedDescription = description.substring(0, 90);

    return (
        <Link to={`/detail/${_id}`} onClick={() => {
            window.scroll(0, 0); 
        }}>
            <article>
                <div className='adventure rounded-md h-full'>
                    <img className='time-adv-img' src={image.url} alt={title} />
                    <div className="flex flex-col justify-between p-3 gap-3">
                        <h3 className='text-gray-300 text-center'>{title}</h3>
                    </div>
                    <div className="adventure-middle px-3 pb-3">
                        <p className='text-gray-500 '>{limitedDescription}...</p>
                    </div>
                </div>
            </article>
        </Link>
    )
}

export default TimelineAdventure;