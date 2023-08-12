import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { getProfileErrors } from './getProfileErrors';
import { ServerErrors } from '../../types/ProfileSchema';

describe('getProfileErrors tests', () => {
  test('get profile errors from state', () => {
    const state: DeepPartial<StoreSchema> = {
      profile: {
        isLoading: false,
        readonly: true,
        errors: [ServerErrors.FAILED_TO_GET_DATA],
      },
    }
    expect(getProfileErrors(state as StoreSchema)).toEqual([ServerErrors.FAILED_TO_GET_DATA])
  })

  test('get errors from empty state', () => {
    const state: DeepPartial<StoreSchema> = {}
    expect(getProfileErrors(state as StoreSchema)).toEqual(undefined)
  })
})
