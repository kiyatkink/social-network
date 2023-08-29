import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from '../../../../../app/StoreProvider';
import { getNewCommentIsLoading } from './getNewCommentIsLoading';

describe('getNewCommentIsLoading tests', () => {
  test('get new comment isLoading success', () => {
    const store: DeepPartial<StoreSchema> = {
      newComment: {
        text: '',
        isLoading: true,
      },
    }
    expect(getNewCommentIsLoading(store as StoreSchema)).toEqual(true)
  })

  test('get new comment isLoading empty state', () => {
    const store: DeepPartial<StoreSchema> = {}
    expect(getNewCommentIsLoading(store as StoreSchema)).toEqual(false)
  })
})
