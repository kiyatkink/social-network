import axios from 'axios';
import { AUTH_DATA_USER } from '../consts/localstorage';

export const $api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: localStorage.getItem(AUTH_DATA_USER),
  },
})
