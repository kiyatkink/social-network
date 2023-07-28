import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import axios from 'axios';
import { AUTH_DATA_USER } from 'shared/consts/localstorage';

interface UserData {
  username: string,
  password: string
}
export const loginByUsernameAndPassword = createAsyncThunk<User, UserData, { rejectValue: string }>(
  'login/loginByUsernameAndPassword',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', userData)
      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(AUTH_DATA_USER, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setUser(response.data))
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  },
)
