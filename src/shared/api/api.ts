import axios from 'axios';
import { AUTH_DATA_USER } from '../consts/localstorage';

export const $api = axios.create({
  baseURL: process.env.API_URL,
})

$api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(AUTH_DATA_USER);
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
);
