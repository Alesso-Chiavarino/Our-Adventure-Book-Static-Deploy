import './ArticlesContainer.scss';
import { MdArticle, Link, FaPlus, Article, useLetter, useEffect, useState } from '../../import'


const ArticlesContainer = () => {

    const { getLetters, letters } = useLetter()
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const loadArticles = async () => {
            try {
                if (!letters.docs?.length) {
                    await getLetters();
                } else {
                    setLoader(false);
                }
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoader(false);
            }
        }
        loadArticles();
    }, [])

    let timer = 100;

    return (
        <section className='articles-container'>
            <div className='adv-cont-top-side flex justify-between w-full'>
                <div className='title flex items-center gap-2'>
                    <MdArticle className='title-icon mb-1' />
                    <h3 className='title'>ARTICLES</h3>
                </div>
                <Link to='/letters'> <span className='more-articles px-2 h-full' onClick={() => window.scroll(0, 0)} >More articles <FaPlus className='text-gray-200 ml-1' /> </span> </Link>
            </div>
            <div className='mt-5 flex gap-5 grid-container'>
                {loader ?
                    <div className="articles-grid grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <span className='loader-article'></span>
                        <span className='loader-article'></span>
                        <span className='loader-article'></span>
                        <span className='loader-article'></span>
                        <span className='loader-article'></span>
                        <span className='loader-article'></span>
                    </div>
                    :
                    <div className="articles-grid grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {letters.docs?.map(art => {

                            timer += 300;
                            return <Article key={art._id} {...art} timer={timer} />

                        })}
                    </div>}
                <div className="image-container flex justify-center items-center flex-col">
                    <img src="./img/letter.svg" alt="" />
                    <p>Lo mas bonito de estar enamorado es el silencio. Ese silencio que se crea cuando dos personas se miran a los ojos. Porque sabes que digas lo que digas, aunque intentes decirlo de la forma más espectacular posible, jamás nada podrá acercarse a explicar como te sientes.
                    Y supongo que eso se llama amor:
                    Sonreir callados.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ArticlesContainer;