import axios from 'axios';
import { store } from '../store/store';
const api = axios.create({
  baseURL: 'http://localhost:8080',
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
