import { useLetter, Letter, useEffect, useState, IoIosCreate, RxDoubleArrowLeft, RxDoubleArrowRight, Link } from '../../import'
import './LettersContainer.scss';

const LettersContainer = () => {

    const { getLetters, letters, deleteLetter } = useLetter();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const loadLetters = async () => {
            try {
                getLetters(1);
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoader(false);
            }
        }
        loadLetters();
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
                <div className='w-full'>
                    <h1>Our Letters</h1>
                    <div className='btns-letter-container flex items-center justify-between mb-5 w-full'>
                        <Link to='/letters/form'>
                            <span className='flex bg-green-500 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer hover:bg-green-400'><IoIosCreate className='mb-1' />Write a Letter</span>
                        </Link>
                        <div className="btns text-white flex gap-5">
                            {letters.hasPrevPage ? <span className='flex bg-green-500 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer w-20' onClick={handlePrevius}><RxDoubleArrowLeft /> Previus</span> : <span className='flex bg-green-900 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer w-20' onClick={handlePrevius}><RxDoubleArrowLeft /> Previus</span>}

                            {letters.hasNextPage ? <span className='flex bg-green-500 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer w-20' onClick={handleNext}>Next <RxDoubleArrowRight /></span> : <span className='flex bg-green-900 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer w-20' onClick={handleNext}>Next <RxDoubleArrowRight /></span>}
                        </div>
                    </div>
                    {loader ?
                        <div className='flex justify-center items-center mt-10'>
                            <span className="loader-letter"></span>
                        </div>
                        :
                        <div className='grid-letters grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                            {letters.docs?.map(lett => <Letter key={lett._id} id={lett._id} {...lett} deleteLetter={deleteLetter} />)}
                        </div>}
                </div>
            </main>
        </section>
    )
}

export default LettersContainer;