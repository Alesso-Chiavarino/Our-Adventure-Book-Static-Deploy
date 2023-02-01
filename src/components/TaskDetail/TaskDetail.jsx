import './TaskDetail.scss';
import { useEffect, useState, useTask, useParams, TbArrowBackUp, useNavigate } from '../../import'


const TaskDetail = () => {

    const { getTask } = useTask()
    const { id } = useParams();
    const [task, setTask] = useState({});
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const loadTask = async () => {
            try {
                const res = await getTask(id)
                setTask(res.data);
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setLoader(false);
            }
        }
        loadTask();
    }, [])

    const navigate = useNavigate();

    return (
        <section className='task-detail-section'>
            <main className='mx-auto container flex flex-col items-center'>
                <h1>Our Task</h1>
                <div className='task-detail-container'>
                    <article className='relative'>
                        <TbArrowBackUp className='icon absolute right-2 top-2' onClick={() => navigate(-1)} />
                        {loader ?
                            <div className='flex justify-center items-center task-detail'>
                                <span className="loader-bear"></span>
                            </div>
                            :
                            <div className='flex task-detail flex-col justify-between items-center'>
                                <div className='w-full px-10 top'>
                                    <h2>{task.title}</h2>
                                    <hr className='text-white w-3/4 h-1 mb-5 mx-auto' />
                                </div>
                                <p className='text-gray-400 desc px-10'>{task.description}</p>
                                <div className='p-1 text-gray-200 text-center bottom'>
                                    <span>{task.date}</span>
                                </div>
                            </div>}
                    </article>
                </div>
            </main>
        </section>
    )
}

export default TaskDetail;