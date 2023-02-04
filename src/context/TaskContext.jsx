import { useContext, createContext, useState, getTasksRequest, getTaskRequest, createTaskRequest, updateTaskRequest, deleteTaskRequest, toast } from "../import"



const TaskContext = createContext()

export const useTask = () => {
    return useContext(TaskContext)
}


const TaskProvider = ({ children }) => {

    const [tasks, setTasks] = useState([])

    const changeTasksState = (tasks) => {
        setTasks(tasks)
    }

    const getTasks = async (isDone, page) => {
        const tasks = await getTasksRequest(isDone, page);
        setTasks(tasks.data);
    }

    const getTask = async (id) => {
        const task = await getTaskRequest(id);
        return task;
    }

    const createTask = async (task) => {
        const newTask = await createTaskRequest(task);
        setTasks([...tasks.docs, newTask])
    }

    const updateTask = async (id, task, isDone) => {
        await updateTaskRequest(id, task);
        if (isDone || !isDone) {
            const tasks = await getTasksRequest(isDone, 1);
            return setTasks(tasks.data);
        }
        console.log('paso')
        const tasks = await getTasksRequest('');
        setTasks(tasks.data)
    }

    const deleteTask = async (id, isDone) => {
        await deleteTaskRequest(id);
        const newTasks = await getTasksRequest(isDone, 1);
        setTasks(newTasks.data)
        toast('Task deleted successfully', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            getTasks,
            getTask,
            createTask,
            updateTask,
            deleteTask,
            changeTasksState
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;