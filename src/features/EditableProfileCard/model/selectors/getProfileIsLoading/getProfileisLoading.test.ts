import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading tests', () => {
  test('get profile isLoading from state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        isLoading: false,
        readonly: true,
      },
    }
    expect(getProfileIsLoading(state as StoreSchema)).toBe(false)
  })

  test('get isLoading from empty state', () => {
    const state: DeepPartial<StoreSchema> = {}
    expect(getProfileIsLoading(state as StoreSchema)).toBe(false)
  })
})
