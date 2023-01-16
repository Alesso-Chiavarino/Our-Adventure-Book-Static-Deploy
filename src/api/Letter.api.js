import axios from 'axios';

export const getLettersRequest = (page) => {

    if(page) {
        return axios.get(`https://ouradventurebookdeploy-production.up.railway.app/api/letters?page=${page}`);
    }
    
    return axios.get('https://ouradventurebookdeploy-production.up.railway.app/api/letters');
}

export const getLetterRequest = (id) => {
    return axios.get(`https://ouradventurebookdeploy-production.up.railway.app/api/letters/${id}`);
}

export const createLetterRequest = (letter) => {
    return axios.post('https://ouradventurebookdeploy-production.up.railway.app/api/letters', letter);
}

export const updateLetterRequest = (id, letter) => {
    return axios.put(`https://ouradventurebookdeploy-production.up.railway.app/api/letters/${id}`, letter);
}

export const deleteLetterRequest = (id) => {
    return axios.delete(`https://ouradventurebookdeploy-production.up.railway.app/api/letters/${id}`);
}