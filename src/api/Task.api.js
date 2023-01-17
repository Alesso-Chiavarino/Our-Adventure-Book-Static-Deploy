import axios from "axios";

export const getTasksRequest = async (isDone, page) => {
    if(isDone === '') {
        // return await axios.get(`https://ouradventurebookdeploy-production.up.railway.app/api/tasks?page=${page}`);
        return await axios.get(`http://localhost:4000/api/tasks?page=${page}`);
    }
    
    // return await axios.get(`https://ouradventurebookdeploy-production.up.railway.app/api/tasks?isDone=${isDone}&page=${page}`);
    return await axios.get(`http://localhost:4000/api/tasks?isDone=${isDone}&page=${page}`);
}

export const getTaskRequest = async (id) => {
    // return await axios.get(`https://ouradventurebookdeploy-production.up.railway.app/api/tasks/${id}`)
    return await axios.get(`http://localhost:4000/api/tasks/${id}`)
}

export const createTaskRequest = async (data) => {
    // return await axios.post('https://ouradventurebookdeploy-production.up.railway.app/api/tasks', data)
    return await axios.post('http://localhost:4000/api/tasks', data)
}

export const updateTaskRequest = async (id, data) => {
    // return await axios.put(`https://ouradventurebookdeploy-production.up.railway.app/api/tasks/${id}`, data)
    return await axios.put(`http://localhost:4000/api/tasks/${id}`, data)
}

export const deleteTaskRequest = async (id) => {
    // return await axios.delete(`https://ouradventurebookdeploy-production.up.railway.app/api/tasks/${id}`);
    return await axios.delete(`http://localhost:4000/api/tasks/${id}`);
}