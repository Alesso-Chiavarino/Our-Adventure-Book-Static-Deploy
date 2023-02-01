import { AdventuresContainer, Banner } from '../../import';
import './Home.scss';

const Home = () => {

    return (
        <section className='home'>
            <main className='container'>
                <Banner />
                <AdventuresContainer />
            </main>

        </section>
    )
}

export default Home;