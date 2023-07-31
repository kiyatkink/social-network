import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LoginUserSchema } from '../types/LoginUserSchema';
import { loginByUsernameAndPassword } from '../services/loginByUsernameAndPassword/loginByUsernameAndPassword';

export const initialState: LoginUserSchema = {
  username: '',
  password: '',
  isLoading: false,
}

const LoginUserSlice = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsernameAndPassword.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsernameAndPassword.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(loginByUsernameAndPassword.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})
export const {
  reducer: LoginUserReducer,
  actions: LoginUserActions,
} = LoginUserSlice
