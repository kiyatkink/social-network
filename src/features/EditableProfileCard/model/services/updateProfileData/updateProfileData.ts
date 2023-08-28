import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';
import { ProfileData } from 'entities/Profile'
import { validationForm } from '../validationForm/validationForm';
import { ServerErrors, ValidationErrors } from '../../types/ProfileSchema';
import { getProfileId } from '../../selectors/getProfileId/getProfileId';

export const updateProfileData = createAsyncThunk<
    ProfileData, ProfileData, ThunkApiConfig<Array<ValidationErrors | ServerErrors>>
>(
  'profile/updateProfileData',
  async (formData, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI
    try {
      const errors = validationForm(formData)

      if (errors.length) {
        return rejectWithValue(errors)
      }
      const profileId = getProfileId(getState() as StoreSchema)
      if (!profileId) {
        throw new Error()
      }

      const response = await extra.api.put<ProfileData>(`/profiles/${profileId}`, formData)
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (e) {
      return rejectWithValue([ServerErrors.FAILED_TO_UPDATE_DATA])
    }
  },
)
