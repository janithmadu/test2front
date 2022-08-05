import axios from 'axios';
import config from '../../config';
import { store } from 'store';

const token = store.getState().auth.token;

console.log('user :', store.getState().auth);
console.log(config);
const instance = axios.create({
    baseURL: config.apiUrl
});

instance.interceptors.request.use(function (config) {
    const token = store.getState().auth.token;
    config.headers.Authorization = `Bearer ${token}`;

    return config;
});

export default instance;
