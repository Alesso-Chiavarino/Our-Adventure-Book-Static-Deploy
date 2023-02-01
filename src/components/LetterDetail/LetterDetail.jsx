import './LetterDetail.scss';
import { useEffect, useState, useNavigate, useParams, TbArrowBackUp, useLetter } from '../../import'

const LetterDetail = () => {

    const { getLetter } = useLetter();
    const [letter, setLetter] = useState({});
    const [loader, setLoader] = useState(true);
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const loadLetter = async () => {
            try {
                const letter = await getLetter(id);
                setLetter(letter)
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoader(false)
            }
        }
        loadLetter();
    }, [])

    return (
        <section className='letter-detail-section'>
            <main className='container mx-auto flex flex-col items-center'>
                <h1>Our Letter</h1>
                <div className='letter-detail-container'>
                    {loader ?
                        <article className='letter-detail-loading relative'>
                            <TbArrowBackUp className='text-gray-300 text-xl absolute top-2 right-2 cursor-pointer hover:text-white' onClick={() => {
                                navigate(-1)
                                window.scroll(0, 0);
                            }} />
                            <span className="loader-heart"></span>
                        </article>
                        :
                        <article className='letter-detail relative'>
                            <TbArrowBackUp className='text-gray-300 text-xl absolute top-2 right-2 cursor-pointer hover:text-white' onClick={() => {
                                navigate(-1)
                                window.scroll(0, 0);
                            }} />
                            <div className='flex justify-between items-center'>
                                <h3>{letter.data?.title}</h3>
                                <span className='date'>{letter.data?.date}</span>
                            </div>
                            <hr className='mb-3' />
                            <textarea spellCheck="false" defaultValue={letter.data?.description} />
                            <div className='flex justify-end'>
                                <span className='date'>{letter.data?.author}</span>
                            </div>
                        </article>}
                </div>
            </main>
        </section>
    )
}

export default LetterDetail;