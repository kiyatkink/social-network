import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { getNewCommentText } from './getNewCommentText';

describe('getNewCommentText tests', () => {
  test('get new comment text success', () => {
    const store: DeepPartial<StoreSchema> = {
      newComment: {
        text: 'some_text',
        isLoading: true,
      },
    }
    expect(getNewCommentText(store as StoreSchema)).toEqual('some_text')
  })

  test('get new comment text empty state', () => {
    const store: DeepPartial<StoreSchema> = {}
    expect(getNewCommentText(store as StoreSchema)).toEqual('')
  })
})
