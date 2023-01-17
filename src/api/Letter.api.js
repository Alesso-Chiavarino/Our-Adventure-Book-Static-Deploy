import axios from 'axios';

export const getLettersRequest = (page) => {

    if(page) {
        return axios.get(`https://ouradventurebookdeploy-production.up.railway.app/api/letters?page=${page}`);
        // return axios.get(`http://localhost:4000/api/letters?page=${page}`);
    }
    
    return axios.get('https://ouradventurebookdeploy-production.up.railway.app/api/letters');
    // return axios.get('http://localhost:4000/api/letters');
}

export const getLetterRequest = (id) => {
    return axios.get(`https://ouradventurebookdeploy-production.up.railway.app/api/letters/${id}`);
    // return axios.get(`http://localhost:4000/api/letters/${id}`);
}

export const createLetterRequest = (letter) => {
    return axios.post('https://ouradventurebookdeploy-production.up.railway.app/api/letters', letter);
    // return axios.post('http://localhost:4000/api/letters', letter);
}

export const updateLetterRequest = (id, letter) => {
    return axios.put(`https://ouradventurebookdeploy-production.up.railway.app/api/letters/${id}`, letter);
    // return axios.put(`http://localhost:4000/api/letters/${id}`, letter);
}

export const deleteLetterRequest = (id) => {
    return axios.delete(`https://ouradventurebookdeploy-production.up.railway.app/api/letters/${id}`);
    // return axios.delete(`http://localhost:4000/api/letters/${id}`);
}