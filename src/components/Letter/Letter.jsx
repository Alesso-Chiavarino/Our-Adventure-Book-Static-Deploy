import './Letter.scss';
import { useRef } from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
import { IoIosOpen } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';


const Letter = ({ title, _id, deleteLetter }) => {

    const letterContainerRef = useRef(null)
    const letterRef = useRef(null)
    const icons = useRef(null)

    const navigate = useNavigate()

    const handleOver = () => {

        letterContainerRef.current.className = 'letter-container-off'
        letterRef.current.className = 'letter-off'
        icons.current.className = 'flex gap-5'
    }

    const handleLeave = () => {
        letterContainerRef.current.className = 'letter-container'
        letterRef.current.className = 'letter'
        icons.current.className = 'collapse'
    }



    return (
        <article className='letter-container' ref={letterContainerRef} onMouseOver={handleOver} onMouseLeave={handleLeave}>
            <h3>{title}</h3>
            <div className='letter' ref={letterRef}>
                <span className='collapse' ref={icons}>
                    <div className='letter-icon' onClick={() => {
                        navigate(`/letters/form/${_id}`)
                        window.scroll(0, 0);
                    }}>
                        <AiFillEdit />
                    </div>
                    <div className="letter-icon" onClick={() => {
                        navigate(`/letters/detail/${_id}`)
                        window.scroll(0, 0);
                    }}>
                        <IoIosOpen />
                    </div>

                    <div className='letter-icon' onClick={() => {
                        deleteLetter(_id)
                    }}>
                        <FaTrashAlt />
                    </div>
                </span>
            </div>
        </article>
    )
}

export default Letter;