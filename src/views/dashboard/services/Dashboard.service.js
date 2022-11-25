import axios from 'axios';
const baseUrl = import.meta.env.VITE_NODE_ENV === 'dev' ? import.meta.env.VITE_API_URL_DEV : import.meta.env.VITE_API_URL_PROD;

export default class DashboardService {
    getMargenBruto(anio) {
        return axios.get(`${baseUrl}dashboard/get-margen-bruto/${anio}`);
    }

    getPromedioInventario(anio) {
        return axios.get(`${baseUrl}dashboard/get-inventario-promedio/${anio}`);
    }

    getTopTres(anio) {
        return axios.get(`${baseUrl}dashboard/get-top-tres/${anio}`);
    }

    getVendidosPorcentaje(anio) {
        return axios.get(`${baseUrl}dashboard/get-vendidos-porcentaje/${anio}`);
    }
}
