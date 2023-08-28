import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { getCommentsIsLoading } from './getCommentsIsLoading';

describe('getCommentsIsLoading tests', () => {
  test('get comments isLoading success', () => {
    const store: DeepPartial<StoreSchema> = {
      comments: {
        error: 'some_error',
        isLoading: true,
        ids: [],
        entities: {},
      },
    }
    expect(getCommentsIsLoading(store as StoreSchema)).toEqual(true)
  })
  test('get comments isLoading empty store', () => {
    const store: DeepPartial<StoreSchema> = {}
    expect(getCommentsIsLoading(store as StoreSchema)).toEqual(false)
  })
})
