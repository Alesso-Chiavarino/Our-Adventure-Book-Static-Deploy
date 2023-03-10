import { FaPlaneDeparture, MdFavorite, MdPhotoLibrary, AiFillHome, FaBeer, useAdventure, Adventure, RxDoubleArrowLeft, RxDoubleArrowRight, useEffect, useSearch, useParams, useRef, useState } from '../../import'
import './Adventures.scss';

const Adventures = () => {

    const { adventures, data, getLimitedAdventures, confirm, handleConfirm, changeAdventuresState } = useAdventure();
    const { search } = useSearch();

    const previusRef = useRef(null);
    const nextRef = useRef(null);

    const [allFilter, setAllFilter] = useState(true);
    const [travelFilter, setTravelFilter] = useState(false);
    const [favoritesFilter, setFavoritesFilter] = useState(false);
    const [homeFilter, setHomeFilter] = useState(false);
    const [partyFilter, setPartyFilter] = useState(false);
    const [loader, setLoader] = useState(true);

    const { fav } = useParams();

    const handleAllFilter = async () => {
        try {
            changeAdventuresState([])
            setLoader(true)
            setAllFilter(true)
            setTravelFilter(false)
            setFavoritesFilter(false)
            setHomeFilter(false)
            setPartyFilter(false)
            await getLimitedAdventures(12, 1, '');
            // if (!adventures.length) {
            //     await getLimitedAdventures(12, 1, '');
            //     setLoader(false);
            // } else {
            //     console.log('aca')
            //     console.log(adventures)
            //     setLoader(false);
            // }
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoader(false);
        }
    }

    const handlePartyFilter = async () => {
        try {
            changeAdventuresState([])
            setLoader(true)
            setPartyFilter(true)
            setTravelFilter(false)
            setFavoritesFilter(false)
            setHomeFilter(false)
            setAllFilter(false)
            await getLimitedAdventures(12, 1, 'party')
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoader(false);
        }
    }

    const handleTravelFilter = async () => {
        try {
            changeAdventuresState([])
            setLoader(true)
            setTravelFilter(true)
            setFavoritesFilter(false)
            setHomeFilter(false)
            setPartyFilter(false)
            setAllFilter(false)
            await getLimitedAdventures(12, 1, 'travel')
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoader(false);
        }
    }

    const handleFavoritesFilter = async () => {
        try {
            changeAdventuresState([])
            setLoader(true)
            setFavoritesFilter(true)
            setTravelFilter(false)
            setHomeFilter(false)
            setPartyFilter(false)
            setAllFilter(false)
            await getLimitedAdventures(12, 1, 'fav')
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoader(false);
        }
    }

    const handleHomeFilter = async () => {
        try {
            changeAdventuresState([])
            setLoader(true)
            setHomeFilter(true)
            setTravelFilter(false)
            setFavoritesFilter(false)
            setPartyFilter(false)
            setAllFilter(false)
            await getLimitedAdventures(12, 1, 'home')
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoader(false);
        }
    }

    useEffect(() => {
        const loadAdventures = async () => {
            try {
                //try for now
                // if (!adventures.length) {
                //     await getLimitedAdventures(12, 1, '');
                //     return setLoader(false);
                // } else {
                //     return setLoader(false);
                // }
                //closed for now

                // if (fav) {
                //     if (allFilter) {
                //         handleConfirm(true);
                //         await handleFavoritesFilter();
                //     } else {
                //         handleConfirm(false);
                //     }
                //     await handleFavoritesFilter();
                //     return;
                // }
                if (search) {
                    setLoader(true)
                    setAllFilter(true)
                    setTravelFilter(false)
                    setFavoritesFilter(false)
                    setHomeFilter(false)
                    setPartyFilter(false)
                    await getLimitedAdventures(12, 1, search)
                    setLoader(false);
                    return;
                }
                await handleAllFilter();
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoader(false);
            }
        }
        loadAdventures()
    }, [search, fav])

    const handleNextPage = async () => {
        if (data.hasNextPage) {
            await getLimitedAdventures(12, data.nextPage, '')
        }
    }

    const handlePreviusPage = async () => {
        if (data.hasPrevPage) {
            await getLimitedAdventures(12, data.prevPage, '')
        }
    }

    const conectToChild = (data) => {
        console.log(data)
    }

    const loadAdventures = () => {
        if (loader) {
            return (
                <div className='grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-3 gap-y-4"'>
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
                    <span className="loader-adventure"></span>
                    <span className="loader-adventure"></span>
                </div>
            )
        }
        if (adventures.length === 0) {
            return (
                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-3 gap-y-4 md:gap-y-0 md:gap-3"'>
                    <div className='col-span-4'>
                        <h1 className='text-2xl text-white font-bold text-center'>No adventures yet :&#40;</h1>
                    </div>
                </div>
            )
        }
        return (
            <div className='grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-3 gap-y-4"'>
                {adventures.map((adv, i) => <Adventure setAllFilter={setAllFilter} conectToChild={conectToChild} confirm={confirm} setFavoritesFilter={setFavoritesFilter} {...adv} id={i} key={adv._id} />)}
            </div>
        )
    }

    return (
        <section className='adventures-section min-h-screen'>
            <main className='container mx-auto'>
                <div className='grid grid-cols-12 pt-1'>
                    <aside className="adv-left col-span-12 md:col-span-3 h-fit md:sticky top-0 ">
                        <span className='flex text-white font-extrabold text-lg py-2 px-2'>Adventures ({adventures.length})</span>
                        <div className='flex flex-col gap-1'>

                            {!allFilter ? <div className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md' onClick={handleAllFilter} >
                                <MdPhotoLibrary className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>All</span>
                            </div> : <div className=' bg-gray-50 text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md' onClick={handleAllFilter} >
                                <MdPhotoLibrary className=' text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>All</span>
                            </div>}

                            {!travelFilter ? <div className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md' onClick={handleTravelFilter} >
                                <FaPlaneDeparture className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Travel</span>
                            </div> : <div className=' bg-gray-50 text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md' onClick={handleTravelFilter} >
                                <FaPlaneDeparture className=' text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Travel</span>
                            </div>}

                            {!favoritesFilter ? <div className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md'
                                onClick={handleFavoritesFilter} >
                                <MdFavorite className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Favorites</span>
                            </div> : <div className='bg-gray-50 text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md'
                                onClick={handleFavoritesFilter} >
                                <MdFavorite className='text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Favorites</span>
                            </div>}

                            {!homeFilter ? <div className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md'
                                onClick={handleHomeFilter} >
                                <AiFillHome className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Home</span>
                            </div> : <div className='bg-gray-50 text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md'
                                onClick={handleHomeFilter} >
                                <AiFillHome className='text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Home</span>
                            </div>}

                            {!partyFilter ? <div className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md'
                                onClick={handlePartyFilter} >
                                <FaBeer className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Party</span>
                            </div> : <div className='bg-gray-50 text-gray-900 group flex items-center px-3 py-2 text-sm cursor-pointer font-medium rounded-md'
                                onClick={handlePartyFilter} >
                                <FaBeer className='text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6' /><span>Party</span>
                            </div>}
                        </div>
                    </aside>
                    <div className="adv-right col-span-12 md:col-span-9 pt-1 px-2 md:px-3 ">
                        <div className='flex justify-between mb-5'>
                            {data.hasPrevPage ?
                                <span className='flex  btn-pagination text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer' onClick={handlePreviusPage} ref={previusRef} ><RxDoubleArrowLeft className='text-white' />Previus</span>
                                :
                                <span className='flex  bg-green-900 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer' onClick={handlePreviusPage} ref={previusRef} ><RxDoubleArrowLeft className='text-white' />Previus</span>
                            }

                            {data.hasNextPage ?
                                <span className='flex btn-pagination text-white rounded-md justify-center items-center gap-1 text-sm px-2 py-1 cursor-pointer' onClick={handleNextPage} ref={nextRef}  >Next<RxDoubleArrowRight className='text-white' /></span>
                                :
                                <span className='flex  bg-green-900 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer' onClick={handleNextPage} ref={nextRef}  >Next<RxDoubleArrowRight className='text-white' /></span>}
                        </div>
                        {loadAdventures()}
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Adventures;