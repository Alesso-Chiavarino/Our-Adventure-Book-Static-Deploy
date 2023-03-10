import { TypeWriter, GrMail, MdTimeline, IoIosAlbums, FaListAlt, Link, IoTicket } from '../../import'
import './Banner.scss';


const Banner = () => {

    const goUp = () => {
        window.scroll(0, 0);
    }

    return (
        <div className='banner container flex justify-between my-20'>
            <div className='grid lg:grid-cols-2 gap-10 py-3 md:mt-10'>
                <div className='flex flex-col banner-left'>
                    <h1 className='animate__animated  animate__fadeInLeft banner-title text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-indigo-500'>Our Adventure Book</h1>
                    <span className='type-writer my-4'><TypeWriter /></span>
                    <p className=' animate__animated  animate__fadeInLeft text-gray-200' style={{ animationDelay: "0.5s" }}>Welcome to <b>Our Adventure Book</b>, it is a page where we can save the most special moments that will we have, and those that we don't too :)</p>
                    <p className=' animate__animated mt-5 animate__fadeInLeft text-gray-300' style={{ animationDelay: "1s" }}>And it's a gift for the 3 years we have been a couple. I hope you enjoy it as much as I enjoyed doing it. With love, your boy &lt;3.</p>
                </div>
                <div className='grid grid-cols-2 gap-2 lg:grid-cols-3 lg:gap-4"'>

                    <Link to='/letters' onClick={goUp}>
                        <div className="banner-card letters animate__animated animate__flipInY animate__faster" style={{ animationDelay: "100ms" }}>
                            <GrMail />
                        </div>
                    </Link>

                    <Link to='/tasks' onClick={goUp}>
                        <div className="banner-card list animate__animated animate__flipInY animate__faster " style={{ animationDelay: "400ms" }}>
                            <FaListAlt />
                        </div>
                    </Link>

                    <Link to='/adventures' onClick={goUp}>
                        <div className="banner-card album animate__animated animate__flipInY animate__faster " style={{ animationDelay: "700ms" }}>
                            <IoIosAlbums className='text-white' />
                        </div>
                    </Link>

                    <a href='https://open.spotify.com/playlist/086RjPNbhLfSCBprflmpEa?si=da1497741d374b0b' rel="noreferrer" target='_blank' onClick={goUp}>
                        <div className="banner-card spotify animate__animated animate__flipInY animate__faster " style={{ animationDelay: "1000ms" }}>
                            <img src="./img/spotify.webp" alt="" />
                        </div>
                    </a>

                    <Link to={'/tickets'} rel="noreferrer" onClick={goUp}>
                        <div className="banner-card tiktok animate__animated animate__flipInY animate__faster " style={{ animationDelay: "1300ms" }}>
                            <IoTicket className='text-white' />
                        </div>
                    </Link>

                    <Link to='/adventures/timeline' onClick={goUp}>
                        <div className="banner-card favs animate__animated animate__flipInY animate__faster " style={{ animationDelay: "1600ms" }}>
                            <MdTimeline />
                        </div>
                    </Link>

                    {/* <a href='https://www.tiktok.com/@user6195661253900' rel="noreferrer" target='_blank' onClick={goUp}>
                        <div className="banner-card tiktok animate__animated animate__flipInY animate__faster " style={{ animationDelay: "1300ms" }}>
                            <img src="./img/tiktok.svg" alt="" />
                        </div>
                    </a> */}

                    {/* <Link to='/adventures/favorites' onClick={goUp}>
                        <div className="banner-card favs animate__animated animate__flipInY animate__faster " style={{ animationDelay: "1600ms" }}>
                            <MdTimeline />
                        </div>
                    </Link> */}

                </div>
            </div>
        </div>
    )
}

export default Banner;