import axios from 'axios';
const baseUrl = import.meta.env.VITE_NODE_ENV === 'dev' ? import.meta.env.VITE_API_URL_DEV : import.meta.env.VITE_API_URL_PROD;

export default class FacturasService {
    get() {
        return axios.get(`${baseUrl}facturas`);
    }

    post(payload) {
        return axios.post(`${baseUrl}facturas`, payload);
    }

    delete(id) {
        return axios.delete(`${baseUrl}facturas/${id}`);
    }

    put(id, payload) {
        return axios.put(`${baseUrl}facturas/${id}`, payload);
    }
}
