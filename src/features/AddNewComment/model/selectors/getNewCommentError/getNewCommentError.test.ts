import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { getNewCommentError } from './getNewCommentError';

describe('getNewCommentError tests', () => {
  test('get new comment error success', () => {
    const store: DeepPartial<StoreSchema> = {
      newComment: {
        text: '',
        isLoading: false,
        error: 'error',
      },
    }
    expect(getNewCommentError(store as StoreSchema)).toEqual('error')
  })

  test('get new comment error empty state', () => {
    const store: DeepPartial<StoreSchema> = {}
    expect(getNewCommentError(store as StoreSchema)).toEqual(undefined)
  })
})
