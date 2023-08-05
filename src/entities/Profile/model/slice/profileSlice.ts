import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/ProfileSchema'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    changeFirstName: (state, action: PayloadAction<string>) => {
      state!.data!.first = action.payload
    },
    changeLastName: (state, action: PayloadAction<string>) => {
      state!.data!.lastname = action.payload
    },
    deleteProfileData: (state) => {
      state.data = undefined
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
