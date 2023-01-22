import axios from 'axios'

export const getAdventuresRequest = async () => {
    // return await axios.get('https://our-adventure-book-api-rest.onrender.com/api/adventure');
    return await axios.get('http://localhost:4000/api/adventure');
}

export const getLimitedAdventuresRequest = async (limit, page, search) => {
    // return await axios.get(`https://our-adventure-book-api-rest.onrender.com/api/adventure?limit=${limit}&page=${page}&search=${search}`);
    return await axios.get(`http://localhost:4000/api/adventure?limit=${limit}&page=${page}&search=${search}`);
}

export const getAdventureRequest = async (id) => {
    // return await axios.get(`https://our-adventure-book-api-rest.onrender.com/api/adventure/${id}`);
    return await axios.get(`http://localhost:4000/api/adventure/${id}`);
}

export const createAdventureRequest = async (data) => {
    const form = new FormData()
    
    form.append('title', data.title)
    form.append('description', data.description)
    form.append('date', data.date)
    form.append('category', data.category)
    form.append('image', data.image)

    // return await axios.post('https://our-adventure-book-api-rest.onrender.com/api/adventure', form, {
    return await axios.post('http://localhost:4000/api/adventure', form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const updateAdventureRequest = async (id, data) => {
    const form = new FormData()
    form.append('title', data.title)
    form.append('description', data.description)
    form.append('date', data.date)
    form.append('category', data.category)
    form.append('image', data.image)

    // return await axios.put(`https://our-adventure-book-api-rest.onrender.com/api/adventure/${id}`, form, {
    return await axios.put(`http://localhost:4000/api/adventure/${id}`, form, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const deleteAdventureRequest = async (id) => {
    // return await axios.delete(`https://our-adventure-book-api-rest.onrender.com/api/adventure/${id}`);
    return await axios.delete(`http://localhost:4000/api/adventure/${id}`);
}