import { useState, useEffect, useRef, useAdventure, useParams, useNavigate, RiSendPlaneFill, ThreeDots, RxUpdate, TbArrowBackUp, FaPlaneDeparture, MdFavorite, AiFillHome, FaBeer, ToastContainer, BsFillExclamationTriangleFill } from '../../import'
import './Form.scss';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false)

  //categories state
  const [travel, setTravel] = useState(false)
  const [party, setParty] = useState(false)
  const [fav, setFav] = useState(false)
  const [home, setHome] = useState(false)
  const [category, setCategory] = useState('');

  // validations
  const [titleValidation, setTitleValidation] = useState(false);
  const [descriptionValidation, setDescriptionValidation] = useState(false);
  const [dateValidation, setDateValidation] = useState(false);
  const [categoryValidation, setCategoryValidation] = useState(false);
  const [formValid, setFormValid] = useState(false);

  //ref
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);
  const categoryRef = useRef(null);
  const formErrorRef = useRef(null);

  //regular expresions
  const expresions = {
    title: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    description: /^[a-zA-ZÀ-ÿ\s]{1,500}$/, // Letras y espacios, pueden llevar acentos, hasta 500.
    // date: /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/, // Letras y espacios, pueden llevar acentos, hasta 500.
    // date: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    // date: /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/


  }

  const handleTravel = () => {
    if (travel) {
      setTravel(false)
      setCategory('')
      setCategoryValidation(false);
      categoryRef.current.className = 'error-message block top-9'
    } else {
      setCategoryValidation(true);
      setTravel(true)
      setCategory('travel')
      categoryRef.current.className = 'hidden'
    }
    setFav(false)
    setHome(false)
    setParty(false)
  }

  const handleParty = () => {
    if (party) {
      setParty(false)
      setCategory('')
      setCategoryValidation(false);
      categoryRef.current.className = 'error-message block top-9'
    } else {
      setCategoryValidation(true);
      setParty(true)
      setCategory('party')
      categoryRef.current.className = 'hidden'
    }
    setTravel(false)
    setFav(false)
    setHome(false)

  }

  const handleFav = () => {
    if (fav) {
      setFav(false)
      setCategory('')
      setCategoryValidation(false);
      categoryRef.current.className = 'error-message block top-9'
    } else {
      setCategoryValidation(true);
      setFav(true)
      setCategory('fav')
      categoryRef.current.className = 'hidden'
    }
    setTravel(false)
    setHome(false)
    setParty(false)

  }

  const handleHome = () => {
    if (home) {
      setHome(false)
      setCategory('')
      setCategoryValidation(false);
      categoryRef.current.className = 'error-message block top-9'
    } else {
      setCategoryValidation(true);
      setHome(true)
      setCategory('home')
      categoryRef.current.className = 'hidden'
    }
    setTravel(false)
    setFav(false)
    setParty(false)

  }

  const { createAdventure, getAdventure, updateAdventure } = useAdventure()

  const handleTitle = (e) => {
    setTitle(e.target.value);

    if (expresions.title.test(title)) {
      setTitleValidation(true);
      titleRef.current.className = 'hidden'
    } else {
      setTitleValidation(false);
      titleRef.current.className = 'error-message block'
    }
  }

  const handleDescription = (e) => {
    setDescription(e.target.value);

    if (expresions.description.test(description)) {
      setDescriptionValidation(true);
      descriptionRef.current.className = 'hidden'
    } else {
      setDescriptionValidation(false);
      descriptionRef.current.className = 'error-message block'
    }
  }

  const handleDate = (e) => {
    setDate(e.target.value);

    if (date != '') {
      setDateValidation(true);
      dateRef.current.className = 'hidden'
    } else {
      dateRef.current.className = 'error-message block'
      setDateValidation(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ((titleValidation && descriptionValidation && dateValidation && categoryValidation)) {

      if (params.id) {
        await updateAdventure(params.id, {
          title,
          description,
          date,
          category,
          image
        })
        navigate(-1)
        return;
      }

      await createAdventure({
        title,
        description,
        date,
        category,
        image
      });
      setTitle('');
      setDescription('');
      setDate('');
      setCategory('');
      navigate(-1);
      return;
    } else {
      setIsSubmit(false);
      formErrorRef.current.className = 'fatal-error-message'
    }
  }

  const params = useParams();

  useEffect(() => {
    const editHandler = async () => {
      if (params.id) {
        const res = await getAdventure(params.id);
        setTitle(res.title);
        setDescription(res.description);
        setDate(res.date);
        setCategory(res.category);
      }
    }
    editHandler();

    if (params.id) {
      setTitleValidation(true);
      setDescriptionValidation(true);
      setDateValidation(true);
      setCategoryValidation(true);
    }

  }, [getAdventure, params.id])

  useEffect(() => {
    if (titleValidation && descriptionValidation && dateValidation && categoryValidation) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [titleValidation, descriptionValidation, dateValidation, categoryValidation])

  const navigate = useNavigate();

  const handleArea = () => {
    if (params.id) {
      return handleButtons2()
    }
    return handleButtons()
  }

  const handleButtons = () => {
    if (isSubmit) {
      if (formValid) {
        return (
          <button type="submit">Submiting
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
          <button type="submit" onClick={() => setIsSubmit(true)} ><RiSendPlaneFill /> Submit</button>
        )
      }
    } else {
      return (
        <button type="submit" onClick={() => setIsSubmit(true)} ><RiSendPlaneFill /> Submit</button>
      )
    }
  }

  const handleButtons2 = () => {

    if (isSubmit) {
      if (formValid) {
        return (
          <button type="submit">Updating
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
          <button type="submit" onClick={() => setIsSubmit(true)} ><RxUpdate /> Update</button>
        )
      }
    } else {
      return (
        <button type="submit" onClick={() => setIsSubmit(true)} ><RxUpdate /> Update</button>
      )
    }
  }


  return (
    <>
      <section className='form-container'>
        {params.id ? <h1 className='form-title'>Edit Adventure</h1> : <h1 className='form-title'>Create Adventure</h1>}

        <div className='card-container'>
          <TbArrowBackUp className='go-back-icon' onClick={() => navigate(-1)} />
          <span className='text-white go-back-icon'>  </span>
          <article className='card'>
            <form onSubmit={handleSubmit}>
              {params.id ? <h1>Edit an adventure</h1> : <h1>Create an adventure</h1>}
              <div className="form-group relative">
                <label htmlFor="name">Title</label>
                <input type="text" className="form-control" id="name" value={title} placeholder='Type a title...' onChange={handleTitle} onBlur={handleTitle} onKeyUp={handleTitle} />
                <span ref={titleRef} className='hidden'>Write a correct title</span>
              </div>
              <div className="form-group relative">
                <label htmlFor="message">Description</label>
                <textarea className="form-control" id="message" value={description} placeholder='Type a description...' rows="3" onChange={handleDescription} onBlur={handleDescription} onKeyUp={handleDescription} ></textarea>
                <span ref={descriptionRef} className='hidden'>Write a correct description</span>
              </div>


              <div className='flex w-full date-cat-img-container'>

                <div className='form-left'>
                  <div className="form-group date-form">
                    <label htmlFor="name">Date</label>
                    <div className='date-cont relative'>
                      <input type="date" className="form-control" id="name" value={date} placeholder='Type a date...' onChange={handleDate} onBlur={handleDate} />
                      <span ref={dateRef} className='hidden'>Select a correct date</span>
                    </div>
                  </div>

                  <div className='w-full'>
                    <label htmlFor="image" className='label-img'>Image</label>
                    <input className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" id="image" files={image} onChange={(e) => {
                      console.log(e.target.files[0])
                      setImage(e.target.files[0]);
                    }} type="file"></input>
                  </div>
                </div>


                <div className='flex flex-col w-1/2 pl-10 form-right'>
                  <span className='text-white mb-2'>Category</span>
                  <div className='flex flex-wrap '>
                    <div className="categories-container flex gap-5 relative">
                      {category === 'travel' ? <FaPlaneDeparture className='text-white category-form-active' onClick={handleTravel} /> : <FaPlaneDeparture className='text-gray-400 category-form' onClick={handleTravel} />}
                      {category === 'party' ? <FaBeer className='text-white category-form-active' onClick={handleParty} /> : <FaBeer className='text-gray-400 category-form' onClick={handleParty} />}
                      {category === 'fav' ? <MdFavorite className='text-white category-form-active' onClick={handleFav} /> : <MdFavorite className='text-gray-400 category-form' onClick={handleFav} />}
                      {category === 'home' ? <AiFillHome className='text-white category-form-active' onClick={handleHome} /> : <AiFillHome className='text-gray-400 category-form' onClick={handleHome} />}
                      <span ref={categoryRef} className='hidden'>Select a category</span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="w-full">
                  {/* input file to open the phone camera */}
                  <input type="file" accept="image/*" capture="camera" onChange={(e) => {
                    console.log(e.target.files[0])
                    setImage(e.target.files[0]);
                  }}/>
                </div>

              {handleArea()}
              <span ref={formErrorRef} className='hidden'>The input values are incorrect <BsFillExclamationTriangleFill /></span>
            </form>
          </article>
        </div>
      </section>
      <ToastContainer />
    </>
  )
}

export default Form;