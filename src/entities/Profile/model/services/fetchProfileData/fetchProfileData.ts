import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';
import { ProfileData } from '../../types/ProfileSchema';

export const fetchProfileData = createAsyncThunk<ProfileData, void, ThunkApiConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      console.log(localStorage)
      const response = await extra.api.get<ProfileData>('/profile')
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
