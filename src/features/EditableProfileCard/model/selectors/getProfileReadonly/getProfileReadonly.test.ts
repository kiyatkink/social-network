import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly tests', () => {
  test('get profile readonly from state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        isLoading: false,
        readonly: true,
      },
    }
    expect(getProfileReadonly(state as StoreSchema)).toBe(true)
  })

  test('get readonly from empty state', () => {
    const state: DeepPartial<StoreSchema> = {}
    expect(getProfileReadonly(state as StoreSchema)).toBe(false)
  })
})
