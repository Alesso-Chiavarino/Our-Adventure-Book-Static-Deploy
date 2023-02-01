import { AdventuresContainer, Banner, ArticlesContainer } from '../../import';
import './Home.scss';

const Home = () => {

    return (
        <section className='home'>
            <main className='container'>
                <Banner />
                <AdventuresContainer />
                <ArticlesContainer />
            </main>

        </section>
    )
}

export default Home;