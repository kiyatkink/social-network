import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';
import { ProfileData } from '../../types/ProfileSchema';

export const fetchProfileData = createAsyncThunk<ProfileData, void, ThunkApiConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get<ProfileData>('/profile')
      if (!response) {
        throw new Error()
      }
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
