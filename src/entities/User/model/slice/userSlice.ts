import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AUTH_DATA_USER } from 'shared/consts/localstorage';
import { UserSchema } from '../types/UserSchema';
import { User } from '../types/user';

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.authData = action.payload
    },
    deleteUser(state) {
      delete state.authData
      localStorage.removeItem(AUTH_DATA_USER)
    },
  },
})
export const { reducer: userReducer } = userSlice
export const { actions: userActions } = userSlice
