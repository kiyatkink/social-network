import axios from 'axios';
import { AUTH_DATA_USER } from '../consts/localstorage';

const token = localStorage.getItem(AUTH_DATA_USER)
export const $api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: token,
  },
})
