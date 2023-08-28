import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { ProfileMock } from 'entities/Profile';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm tests', () => {
  test('get profile form from state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        form: ProfileMock,
        isLoading: false,
        readonly: true,
      },
    }
    expect(getProfileForm(state as StoreSchema)).toEqual(ProfileMock)
  })

  test('get form from empty state', () => {
    const state: DeepPartial<StoreSchema> = {}
    expect(getProfileForm(state as StoreSchema)).toEqual(undefined)
  })
})
