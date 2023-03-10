import './LetterForm.scss';
import { useNavigate, useParams, useLetter, useEffect, useState, ThreeDots, RxUpdate, RiSendPlaneFill, TbArrowBackUp } from '../../import'


const LetterForm = () => {

    const { createLetter, updateLetter, getLetter } = useLetter();

    const params = useParams();
    const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [author, setAuthor] = useState('')


    useEffect(() => {
        const loadData = async () => {
            if (params.id) {

                const letter = await getLetter(params.id)

                setTitle(letter.data.title)
                setDate(letter.data.date)
                setDescription(letter.data.description)
                setAuthor(letter.data.author)
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

    const handleInputAuthor = (e) => {
        setAuthor(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (params.id) {
            updateLetter(params.id, {
                title,
                description,
                author,
                date
            })
            setTitle('')
            setDate('')
            setDescription('')
            setAuthor('')

            navigate(-1);

            return;
        }

        createLetter({
            title,
            description,
            author,
            date
        })
        setTitle('')
        setDate('')
        setDescription('')
        setAuthor('')

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
                <button type="submit" className='send-btn'>Sending
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
                <button type="submit" className='send-btn' onClick={() => {
                    setIsSubmit(true)
                    // handleSubmit()
                }} ><RiSendPlaneFill /> Send</button>
            )
        }
    }

    const handleButtons2 = () => {

        if (isSubmit) {
            return (
                <button type="submit" className='send-btn'>Updating
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
                <button type="submit" className='send-btn' onClick={() => {
                    setIsSubmit(true)
                    // handleSubmit()
                }} ><RxUpdate /> Update</button>
            )
        }
    }


    if (params.id) {
        return (
            <section className='letter-form-section'>
                <main className='container mx-auto flex flex-col items-center'>
                    <h1>Edit a Letter</h1>
                    <div className='letter-detail-container'>
                        <form className='w-full relative'>
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
                                <div className='flex justify-end'>
                                    <input type="text" className='input-author' value={author} placeholder='Author...' onChange={(e) => {
                                        handleInputAuthor(e);
                                    }} />
                                </div>
                            </article>
                        </form>
                    </div>
                    <form className='flex justify-center mt-7' onSubmit={handleSubmit}>
                        {handleArea()}
                    </form>
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
                                <div className='flex justify-end'>
                                    <input type="text" className='input-author' value={author} placeholder='Author...' onChange={(e) => {
                                        handleInputAuthor(e);
                                    }} />
                                </div>
                            </article>
                        </form>
                    </div>
                    <form className='flex justify-center mt-7' onSubmit={handleSubmit}>
                        {handleArea()}
                    </form>
                </main>
            </section>
        )
    }

    return (
        renderMain()
    )
}

export default LetterForm;