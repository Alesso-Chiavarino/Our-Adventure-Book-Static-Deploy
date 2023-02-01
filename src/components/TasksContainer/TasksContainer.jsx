import { useEffect, useState, useTask, SiTodoist, BsFillXSquareFill, BsFillCheckSquareFill, Link, RxDoubleArrowLeft, RxDoubleArrowRight } from '../../import'
import './TasksContainer.scss';

import Task from '../Task/Task';

const TasksContainer = () => {


    const { tasks, getTasks, updateTask, deleteTask, changeTasksState } = useTask();

    useEffect(() => {
        handleIsAll()
    }, [])

    const [isAll, setIsAll] = useState(true);
    const [isPending, setIsPending] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [loader, setLoader] = useState(true);

    const handleIsAll = async () => {
        try {
            changeTasksState([])
            setLoader(true);
            setIsAll(true);
            setIsPending(false);
            setIsDone(false);
            await getTasks('', 1)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoader(false)
        }
    }

    const handleIsPending = async () => {
        try {
            changeTasksState([])
            setLoader(true);
            setIsAll(false);
            setIsPending(true);
            setIsDone(false);
            await getTasks(false, 1)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoader(false)
        }
    }

    const handleIsDone = async () => {
        try {
            changeTasksState([])
            setLoader(true);
            setIsAll(false);
            setIsPending(false);
            setIsDone(true);
            await getTasks(true, 1)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setLoader(false)
        }
    }

    const handlePrevius = () => {
        if (isAll) {
            if (tasks.hasPrevPage) {
                return getTasks('', tasks.prevPage);
            }
        }
        if (isPending) {
            if (tasks.hasPrevPage) {
                return getTasks(false, tasks.prevPage);
            }
        }
        if (isDone) {
            if (tasks.hasPrevPage) {
                return getTasks(true, tasks.prevPage);
            }
        }
    }

    const handleNext = () => {
        if (isAll) {
            if (tasks.hasNextPage) {
                return getTasks('', tasks.nextPage);
            }
        }
        if (isPending) {
            if (tasks.hasNextPage) {
                return getTasks(false, tasks.nextPage);
            }
        }
        if (isDone) {
            if (tasks.hasNextPage) {
                return getTasks(true, tasks.nextPage);
            }
        }
    }

    return (
        <section className='tasks-container'>
            <main className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <span className='tasks-container-title collapse pt-5 '>+</span>
                    <h1 className='tasks-container-title pt-5'>Our Tasks</h1>
                    <Link className='bg-green-500 rounded-full w-9 h-9 text-3xl flex items-center justify-center text-white hover:bg-green-400' to='/tasks/form'>+</Link>
                </div>
                <div className='task-grid flex gap-5 pt-5'>
                    <aside>
                        {isAll ? <span className=' bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 text-gray-700' onClick={handleIsAll}><SiTodoist className='mb-1'
                        /> All</span> : <span className='text-gray-400 hover:bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 hover:text-gray-700 ' onClick={handleIsAll}><SiTodoist className='mb-1'
                        /> All</span>}

                        {!isPending ? <div onClick={() => {
                            handleIsPending()

                        }}>
                            <span className='text-gray-400 hover:bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 hover:text-gray-700 '> <BsFillXSquareFill /> Pending</span>
                        </div> : <div onClick={handleIsPending}>
                            <span className='bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 text-gray-700 '> <BsFillXSquareFill /> Pending</span>
                        </div>}

                        {!isDone ? <div onClick={handleIsDone}>
                            <span className='text-gray-400 hover:bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 hover:text-gray-700 '> <BsFillCheckSquareFill /> Done</span>
                        </div> : <div onClick={handleIsDone}>
                            <span className='bg-gray-50 cursor-pointer rounded-md p-1.5 flex items-center gap-2 text-gray-700 '> <BsFillCheckSquareFill /> Done</span>
                        </div>}
                    </aside>
                    <div className='card-task-container'>
                        <div className='flex justify-between mb-2'>
                            {!tasks.hasPrevPage ? <span className='flex w-20  bg-green-900 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer' onClick={handlePrevius}> <RxDoubleArrowLeft className='text-white' /> Previus</span> : <span className='flex btn-pagination text-white rounded-md justify-center items-center w-20 gap-1 text-sm px-2 py-1 cursor-pointer' onClick={handlePrevius}> <RxDoubleArrowLeft className='text-white' /> Previus</span>}

                            {!tasks.hasNextPage ? <span className='flex w-20  bg-green-900 text-white rounded-md justify-center items-center text-sm  gap-1 py-1 px-2 cursor-pointer' onClick={handleNext} >Next <RxDoubleArrowRight className='text-white' /></span> : <span className='flex btn-pagination text-white rounded-md justify-center items-center w-20 gap-1 text-sm px-2 py-1 cursor-pointer' onClick={handleNext} >Next <RxDoubleArrowRight className='text-white' /></span>}
                        </div>
                        {tasks.docs?.length === 0 && isAll ? <span className='text-white flex items-center gap-1'>No tasks yet </span> : null}
                        {tasks.docs?.length === 0 && isPending ? <span className='text-white flex items-center gap-1'><BsFillCheckSquareFill className='mb-1' />Tasks up to date </span> : null}
                        {tasks.docs?.length === 0 && isDone ? <span className='text-white flex items-center gap-1'><BsFillXSquareFill className='mb-1' />No tasks done </span> : null}
                        {loader ?
                            <div className='flex justify-center items-center'>
                                <span className="loader-task"></span>
                            </div>
                            :
                            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5'>
                                {tasks.docs?.map((task) => <Task key={task._id} {...task} deleteTask={deleteTask} updateTask={updateTask} isDone={isDone} isPending={isPending} getTasks={getTasks} isAll={isAll} />)}
                            </div>}
                    </div>
                </div>
            </main>
        </section>
    )
}

export default TasksContainer;