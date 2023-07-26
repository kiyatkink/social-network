import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {
  id: undefined,
  username: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})
export const { reducer: userReducer } = userSlice
export const { actions: userActions } = userSlice
