import './LetterForm.scss';
import { useNavigate, useParams } from 'react-router-dom'
import { useLetter } from '../../context/LetterContext'
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'
import { RxUpdate } from 'react-icons/rx'
import { RiSendPlaneFill } from 'react-icons/ri'
import { TbArrowBackUp } from 'react-icons/tb'

const LetterForm = () => {

    const { createLetter, updateLetter, getLetter } = useLetter();

    const params = useParams();
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    // const [author, setAuthor] = useState('')


    useEffect(() => {
        const loadData = async () => {
            if (params.id) {

                const letter = await getLetter(params.id)

                setTitle(letter.data.title)
                setDate(letter.data.date)
                setDescription(letter.data.description)
            }
        }
        loadData()
    }, [params.id])

    const handleInputTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleInputDate = (e) => {
        setDate(e.target.value)
    }

    const handleInputDescription = (e) => {
        setDescription(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (params.id) {
            updateLetter(params.id, {
                title,
                description,
                date
            })
            setTitle('')
            setDate('')
            setDescription('')

            navigate(-1);

            return;
        }

        createLetter({
            title,
            description,
            date
        })
        setTitle('')
        setDate('')
        setDescription('')

        navigate(-1);

    }

    const [isSubmit, setIsSubmit] = useState(false);

    const handleArea = () => {
        if (params.id) {
            return handleButtons2()
        }
        return handleButtons()
    }

    const handleButtons = () => {
        if (isSubmit) {
            return (
                <button type="submit" className='absolute bottom-16'>Sending
                    <ThreeDots
                        height="20"
                        width="30"
                        radius="9"
                        color="#02f0ac"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                </button>
            )
        } else {
            return (
                <button type="submit" className='absolute bottom-16' onClick={() => setIsSubmit(true)} ><RiSendPlaneFill /> Send</button>
            )
        }
    }

    const handleButtons2 = () => {

        if (isSubmit) {
            return (
                <button type="submit" className='absolute bottom-16'>Updating
                    <ThreeDots
                        height="20"
                        width="30"
                        radius="9"
                        color="#02f0ac"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                </button>
            )
        } else {
            return (
                <button type="submit" className='absolute bottom-16' onClick={() => setIsSubmit(true)} ><RxUpdate /> Update</button>
            )
        }
    }


    if (params.id) {
        return (
            <section className='letter-form-section'>
                <main className='container mx-auto flex flex-col items-center'>
                    <h1>Edit a Letter</h1>
                    <div className='letter-detail-container'>
                        <form className='w-full relative' onSubmit={handleSubmit}>
                            <TbArrowBackUp className='text-gray-300 text-xl absolute top-2 left-2 cursor-pointer hover:text-white' onClick={() => {
                                navigate(-1)
                                window.scroll(0, 0);
                            }} />
                            <article className='letter-detail'>
                                <div className='flex justify-between items-center gap-5'>
                                    <input type="text" className='input-title' placeholder='Write a tittle...' value={title} onChange={(e) => {
                                        handleInputTitle(e);
                                    }} />
                                    <input type="text" className='input-date' placeholder='19/02/20' value={date} onChange={(e) => {
                                        handleInputDate(e);
                                    }} />
                                </div>
                                <hr className='mb-3' />
                                <textarea type="text" className='input-description w-full' placeholder='Write what you want to say ' value={description} onChange={(e) => {
                                    handleInputDescription(e);
                                }} />
                            </article>
                            {handleArea()}
                        </form>
                    </div>
                </main>
            </section>
        )
    }

    const renderMain = () => {
        return (
            <section className='letter-form-section'>
                <main className='container mx-auto flex flex-col items-center'>
                    <h1>Create a Letter</h1>
                    <div className='letter-detail-container'>
                        <form className='w-full relative' onSubmit={handleSubmit}>
                            <TbArrowBackUp className='text-gray-300 text-xl absolute top-2 left-2 cursor-pointer hover:text-white' onClick={() => {
                                navigate(-1)
                                window.scroll(0, 0);
                            }} />
                            <article className='letter-detail'>
                                <div className='flex justify-between items-center gap-5'>
                                    <input type="text" className='input-title' placeholder='Write a tittle...' onChange={(e) => {
                                        handleInputTitle(e);
                                    }} />
                                    <input type="text" className='input-date' placeholder='19/02/20' onChange={(e) => {
                                        handleInputDate(e);
                                    }} />
                                </div>
                                <hr className='mb-3' />
                                <textarea type="text" className='input-description w-full' placeholder='Write what you want to say ' onChange={(e) => {
                                    handleInputDescription(e);
                                }} />
                            </article>
                            {handleArea()}
                        </form>
                    </div>
                </main>
            </section>
        )
    }

    return (
        renderMain()
    )
}

export default LetterForm;