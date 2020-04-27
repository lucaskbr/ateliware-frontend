import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ateliware-lucas.herokuapp.com',
});

export default api;
