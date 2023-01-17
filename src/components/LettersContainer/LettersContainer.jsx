import { useLetter } from '../../context/LetterContext';
import Letter from '../Letter/Letter';
import './LettersContainer.scss';
import { useEffect } from 'react';
import { IoIosCreate } from 'react-icons/io'
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const LettersContainer = () => {

    const { getLetters, letters, deleteLetter } = useLetter();

    useEffect(() => {
        getLetters(1);
    }, [letters])

    const handleNext = () => {
        if (letters.hasNextPage) {
            getLetters(letters.nextPage)
        }
    }

    const handlePrevius = () => {
        if (letters.hasPrevPage) {
            getLetters(letters.prevPage)
        }
    }

    return (
        <section className='letters-container-section'>
            <main className='container mx-auto flex justify-center'>
                <div>
                    <h1>Our Letters</h1>
                    <div className='flex items-center justify-between mb-5'>
                        <div className="btns text-white flex gap-5 order-2">
                            {letters.hasPrevPage ? <span className='flex bg-green-500 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer w-20' onClick={handlePrevius}><RxDoubleArrowLeft /> Previus</span> : <span className='flex bg-green-900 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer w-20' onClick={handlePrevius}><RxDoubleArrowLeft /> Previus</span>}

                            {letters.hasNextPage ? <span className='flex bg-green-500 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer w-20' onClick={handleNext}>Next <RxDoubleArrowRight /></span> : <span className='flex bg-green-900 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer w-20' onClick={handleNext}>Next <RxDoubleArrowRight /></span>}
                        </div>
                        <Link to='/letters/form'>
                            <span className='flex order-1 bg-green-500 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer hover:bg-green-400'><IoIosCreate className='mb-1' />Write a Letter</span>
                        </Link>
                    </div>
                    <div className='grid grid-cols-3 gap-10'>
                        {letters.docs?.map(lett => <Letter key={lett._id} id={lett._id} {...lett} deleteLetter={deleteLetter} />)}
                    </div>
                </div>
            </main>
        </section>
    )
}

export default LettersContainer;