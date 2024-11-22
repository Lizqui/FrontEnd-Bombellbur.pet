import axios from 'axios';

const apiClientMulti = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});


apiClientMulti.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {    
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClientMulti;