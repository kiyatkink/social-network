import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';
import { ProfileData } from 'entities/Profile'
import { validationForm } from '../validationForm/validationForm';
import { ServerErrors, ValidationErrors } from '../../types/ProfileSchema';

export const updateProfileData = createAsyncThunk<ProfileData, ProfileData, ThunkApiConfig<Array<ValidationErrors | ServerErrors>>>(
  'profile/updateProfileData',
  async (formData, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const errors = validationForm(formData)

      if (errors.length) {
        return rejectWithValue(errors)
      }

      const response = await extra.api.put<ProfileData>('/profile', formData)
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (e) {
      return rejectWithValue([ServerErrors.FAILED_TO_UPDATE_DATA])
    }
  },
)
