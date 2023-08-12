import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProfileData } from 'entities/Profile'
import { ProfileSchema, ServerErrors, ValidationErrors } from '../types/ProfileSchema'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
  data: undefined,
  isLoading: false,
  readonly: true,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    changeForm: (state, action: PayloadAction<ProfileData>) => {
      state.form = { ...state.form, ...action.payload }
      state.errors = undefined
    },
    deleteProfileData: (state) => {
      state.data = undefined
    },
    changeReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.errors = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.errors = action.payload
      })
      .addCase(updateProfileData.pending, (state) => {
        state.errors = undefined
        state.isLoading = true
      })
      .addCase(updateProfileData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
        state.readonly = true
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.errors = action.payload
      })
  },
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
