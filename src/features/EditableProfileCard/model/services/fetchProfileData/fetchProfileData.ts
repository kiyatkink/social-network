import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';
import { ProfileData } from 'entities/Profile'
import { ServerErrors, ValidationErrors } from '../../types/ProfileSchema';

export const fetchProfileData = createAsyncThunk<
    ProfileData, string, ThunkApiConfig<Array<ValidationErrors | ServerErrors>>
>(
  'profile/fetchProfileData',
  async (profileId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get<ProfileData>(`/profiles/${profileId}`)
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (e) {
      return rejectWithValue([ServerErrors.FAILED_TO_GET_DATA])
    }
  },
)
