import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { getCommentsError, getCommentsIsLoading } from './commentsSelectors';

describe('getCommentsError tests', () => {
  test('get comments error success', () => {
    const store: DeepPartial<StoreSchema> = {
      comments: {
        error: 'some_error',
        isLoading: false,
        ids: [],
        entities: {},
      },
    }
    expect(getCommentsError(store as StoreSchema)).toEqual('some_error')
  })
  test('get comments error empty store', () => {
    const store: DeepPartial<StoreSchema> = {}
    expect(getCommentsError(store as StoreSchema)).toEqual(undefined)
  })
})

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
