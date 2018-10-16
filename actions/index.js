import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.mashape.com/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foo'}
});

export const searchTracks = singerName => {
    return axiosInstance.get(`search?q=${ singerName }`).then(
    response => response.data.data.map((item) => item.album))
}