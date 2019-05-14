import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistackweekly6-backend.herokuapp.com'
});

export default api;