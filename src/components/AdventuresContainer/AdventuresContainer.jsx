import { useAdventure } from '../../context/AdventureContext';
import Adventure from '../Adventure/Adventure';
import { VscEmptyWindow } from 'react-icons/vsc'
import { useState, useEffect } from 'react';
import './AdventuresContainer.scss';
import { FaImage, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdventuresContainer = () => {

    const [showModal, setShowModal] = useState(false);
    const [loader, setLoader] = useState(true);
    // const [empty, setEmpty] = useState(false);

    const { adventures, getLimitedAdventures } = useAdventure();

    useEffect(() => {
        const loadAdventures = async () => {
            await getLimitedAdventures(15, 1, '');
            setLoader(false);
        }
        loadAdventures();

    }, [])


    
    // if(adventures.length === 0) {
    //     return (
    //         <div className='adventures-container flex gap-5'>
    //             <hr className='text-white w-full' />
    //             <VscEmptyWindow className='empty-icon' />
    //             <p className='text-white'>No adventures yet</p>
    //         </div>
    //     )
    // }



    return (
        <section className='adventures-container' onClick={() => setShowModal(false)} >
            <div className='adv-cont-top-side flex justify-between w-full'>
                <div className='title flex items-center gap-2'>
                    <FaImage className='mb-1' />
                    <h3 className='title'>ADVENTURES</h3>
                </div>
                <Link to='/adventures'> <span className='more-adventures px-2 h-full' onClick={() => window.scroll(0, 0)} >More adventures <FaPlus className='text-gray-200 ml-1' /> </span> </Link>
            </div>
            {loader ?
                <div className='mt-20' >
                    <span className="loader-egg"></span>
                </div>
                :
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 py-6' >
                    {adventures.map((ad, id) => <Adventure id={id} class={ad._id} key={ad._id} {...ad} show={showModal} set={setShowModal} />)}
                </div>}
        </section>
    )
}

export default AdventuresContainer;