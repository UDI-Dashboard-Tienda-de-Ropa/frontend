import axios from 'axios';
const baseUrl = import.meta.env.VITE_NODE_ENV === 'dev' ? import.meta.env.VITE_API_URL_DEV : import.meta.env.VITE_API_URL_PROD;

export default class UsersService {
    get() {
        return axios.get(`${baseUrl}personas`);
    }

    find(id) {
        return axios.get(`${baseUrl}personas/${id}`);
    }

    findByUid(uid) {
        return axios.get(`${baseUrl}personas/get-by-uid/${uid}`);
    }

    post(payload) {
        return axios.post(`${baseUrl}personas`, payload);
    }

    put(id, payload) {
        console.log(id, payload)
        return axios.put(`${baseUrl}personas/${id}`, payload);
    }

    delete(id) {
        return axios.delete(`${baseUrl}personas/${id}`);
    }
}
