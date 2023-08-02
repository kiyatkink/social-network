import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';
import { User, userActions } from 'entities/User';
import { AUTH_DATA_USER } from 'shared/consts/localstorage';

interface UserData {
  username: string,
  password: string
}
export const loginByUsernameAndPassword = createAsyncThunk<User, UserData, ThunkApiConfig<string>>(
  'login/loginByUsernameAndPassword',
  async (userData, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.post<User>('/login', userData)
      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(AUTH_DATA_USER, JSON.stringify(response.data))
      dispatch(userActions.setUser(response.data))
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
