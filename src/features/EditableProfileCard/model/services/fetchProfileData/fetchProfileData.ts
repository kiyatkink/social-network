import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';
import { ProfileData } from 'entities/Profile'
import { ServerErrors, ValidationErrors } from '../../types/ProfileSchema';
import { getProfileId } from '../../selectors/getProfileId/getProfileId';

export const fetchProfileData = createAsyncThunk<
    ProfileData, void, ThunkApiConfig<Array<ValidationErrors | ServerErrors>>
>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI
    try {
      const profileId = getProfileId(getState() as StoreSchema)
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
