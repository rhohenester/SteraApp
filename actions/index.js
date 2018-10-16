import axios from 'axios';
import accessKey from 'accessKey';

const axiosInstance = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.mashape.com/',
    timeout: 1000,
    headers: {'X-Custom-Header': accessKey}
});