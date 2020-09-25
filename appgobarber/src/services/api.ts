import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.27.64.1:3334',
});

export default api;
