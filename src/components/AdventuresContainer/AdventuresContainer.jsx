import { useAdventure, Adventure, VscEmptyWindow, useState, useEffect, FaImage, FaPlus, Link } from '../../import'
import './AdventuresContainer.scss';

const AdventuresContainer = () => {

    const [showModal, setShowModal] = useState(false);
    const [loader, setLoader] = useState(true);

    const { adventuresHome, getLimitedAdventures } = useAdventure();

    useEffect(() => {
        const loadAdventures = async () => {
            if (!adventuresHome?.length) {
                await getLimitedAdventures(10, 1, '');
                setLoader(false);
            } else {
                setLoader(false);
            }
        }
        loadAdventures();

    }, [])

    const loadAdventuress = () => {
        if (loader) {
            return (
                <div className='grid mt-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6"'>
                    <span className="loader-adventure"></span>
                    <span className="loader-adventure"></span>
                    <span className="loader-adventure"></span>
                    <span className="loader-adventure"></span>
                    <span className="loader-adventure"></span>
                    <span className="loader-adventure"></span>
                    <span className="loader-adventure"></span>
                    <span className="loader-adventure"></span>
                    <span className="loader-adventure"></span>
                    <span className="loader-adventure"></span>
                </div>
            )
        }
        if (adventuresHome.length === 0) {
            return (
                <div className='adventures-container flex gap-5'>
                    <hr className='text-white w-full' />
                    <VscEmptyWindow className='empty-icon' />
                    <p className='text-white'>No adventures yet</p>
                </div>
            )
        }
        return (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6' >
                {adventuresHome.map((ad, id) => <Adventure id={id} class={ad._id} key={ad._id} {...ad} show={showModal} set={setShowModal} />)}
            </div>
        )
    }

    return (
        <section className='adventures-container' onClick={() => setShowModal(false)} >
            <div className='adv-cont-top-side flex justify-between w-full'>
                <div className='title flex items-center gap-2'>
                    <FaImage className='mb-1 title-icon' />
                    <h3 className='title'>ADVENTURES</h3>
                </div>
                <Link to='/adventures'> <span className='more-adventures px-2 h-full' onClick={() => window.scroll(0, 0)} >More adventures <FaPlus className='text-gray-200 ml-1' /> </span> </Link>
            </div>
            {loadAdventuress()}
        </section>
    )
}

export default AdventuresContainer;