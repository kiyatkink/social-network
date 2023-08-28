import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { ProfileMock } from 'entities/Profile';
import { getProfileData } from './getProfileData';

describe('getProfileData tests', () => {
  test('get profile data from state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        data: ProfileMock,
        isLoading: false,
        readonly: true,
      },
    }
    expect(getProfileData(state as StoreSchema)).toEqual(ProfileMock)
  })

  test('get data from empty state', () => {
    const state: DeepPartial<StoreSchema> = {}
    expect(getProfileData(state as StoreSchema)).toEqual(undefined)
  })
})
