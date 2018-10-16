import axios from 'axios';

const API_KEY = '6c4ZAxHSdqmshyBbZbBsUmsSZiljp1MGz8BjsnzS8CIPmsUKmJ';

const axiosIntance = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.mashape.com/',
  timeout: 2000,
  headers: {'X-Mashape-Key': API_KEY}
});


export const searchTracks = singerName => {
  return axiosIntance.get(`search?q=${singerName}`).then(
    response => response.data.data.map(item => item.album))
}
