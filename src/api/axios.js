import axios from 'axios';

const api = axios.create({
    baseURL: 'http://tu-dominio-laravel.test/api',
});

// Interceptor para añadir el Bearer Token en cada petición
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;

// Añadir esto en src/api/axios.js
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/'; // Redirigir al login
    }
    return Promise.reject(error);
  }
);