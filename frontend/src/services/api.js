import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
const AUTH_BASE_URL = process.env.REACT_APP_AUTH_URL || 'http://localhost:3001';

// Create axios instances
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

const authApi = axios.create({
  baseURL: AUTH_BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Response interceptor for error handling
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

authApi.interceptors.response.use(
  response => response,
  error => {
    console.error('Auth API Error:', error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

// Reference service
export const referenceService = {
  getAll: (category) => {
    const params = category ? { category } : {};
    return api.get('/api/references/all', { params });
  },
  
  add: (formData) => api.post('/api/references/add', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  
  delete: (id) => api.delete(`/api/references/delete/${id}`)
};

// Auth service
export const authService = {
  login: (username, password) => authApi.post('/login', { username, password }),
  logout: () => authApi.post('/logout'),
  checkAuth: () => authApi.get('/checkAuth')
};

// Helper to get full URL for images
export const getImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  return `${API_BASE_URL}/${path}`;
};

export { api, authApi, API_BASE_URL, AUTH_BASE_URL };
