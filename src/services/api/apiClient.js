import axios from 'axios';
import config from '../../config';

console.log(config);
const instance = axios.create({
    baseURL: config.apiUrl
});

export default instance;
