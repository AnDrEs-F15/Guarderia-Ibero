import axios from 'axios';
import { store } from '../store/store';
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URI,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

api.interceptors.request.use((request) => {
  const state = store.getState();
  const token = state.auth.token;
  request.headers.Authorization = token ? 'Bearer ' + token : '';
  return request;
});

export default api;
