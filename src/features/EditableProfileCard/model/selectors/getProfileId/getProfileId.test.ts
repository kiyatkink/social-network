import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { UserMock } from 'entities/User';
import { getProfileId } from './getProfileId';

describe('getProfileId tests', () => {
  test('get profileId from state', () => {
    const state: DeepPartial<StoreSchema> = {
      user: {
        authData: UserMock,
      },
    }
    expect(getProfileId(state as StoreSchema)).toBe('1')
  })

  test('get isLoading from empty state', () => {
    const state: DeepPartial<StoreSchema> = {}
    expect(getProfileId(state as StoreSchema)).toBe(undefined)
  })
})
