import { Adventure, useAdventure, useEffect, useState } from '../../import'
import './Timeline.scss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineAdventure from '../../components/TimelineAdventure/TimelineAdventure';
import ScrollButton from '../../components/ScrollButton/ScrollButton';


const Timeline = () => {

    const { getTotalAdventures, adventuresTimeline } = useAdventure();
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const loadAdventures = async () => {
            try {
                if (!adventuresTimeline.length) {
                    await getTotalAdventures();
                }
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoader(false);
            }
        }
        loadAdventures()
    }, [])


    return (
        <section className='timeline-section'>
            <ScrollButton />
            <main className='container mx-auto'>
                {loader ?
                    <div className='flex justify-center items-center h-screen'>
                        <h3 className='loader-timeline'></h3>
                    </div>
                    :
                    <VerticalTimeline>
                        {adventuresTimeline.map((adventure, index) => {
                            return (
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#00a98f', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '10px solid  #171717' }}
                                    date={adventure.date}
                                    iconStyle={{ background: '#00a98f', color: '#fff' }}
                                    icon={<i className="fas fa-map-marker-alt"></i>}
                                    key={index}
                                >
                                    <TimelineAdventure {...adventure} />
                                </VerticalTimelineElement>
                            )
                        })}
                    </VerticalTimeline>}
            </main>
        </section>
    )
}

export default Timeline;