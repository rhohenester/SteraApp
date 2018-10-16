import axios from 'axios';
import _ from 'lodash';

const API_KEY = 'K5SjzJFGu3msh7xkfJG6iLY7BISZp1UkK7GjsnfqsJk1IGY6ZC';

const axiosIntance = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.mashape.com/',
  timeout: 2000,
  headers: {'X-Mashape-Key': API_KEY}
});


export const searchTracks = singerName => {
  return axiosIntance.get(`search?q=${singerName}`).then(
    response => {
       const albums = response.data.data.map(item => item.album);
       const uniqueAlbuns = _.uniqBy(albums, 'title');

       return uniqueAlbuns;
    })
}
