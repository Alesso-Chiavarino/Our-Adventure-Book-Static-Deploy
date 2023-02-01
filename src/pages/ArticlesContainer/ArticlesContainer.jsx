import './ArticlesContainer.scss';
import { MdArticle, Link, FaPlus, Article, useLetter, useEffect } from '../../import'


const ArticlesContainer = () => {

    const { getLetters, letters } = useLetter()

    useEffect(() => {
        const loadArticles = async () => {
            await getLetters()
        }
        loadArticles();
    }, [])

    console.log(letters.docs)

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
                <div className="articles-grid grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {letters.docs?.map(art => <Article key={art._id} {...art} />)}
                </div>
                <div className="image-container flex justify-center items-center">
                    <img src="./img/letter.svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default ArticlesContainer;