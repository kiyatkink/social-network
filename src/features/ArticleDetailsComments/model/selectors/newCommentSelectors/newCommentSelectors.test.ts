import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { getNewCommentError, getNewCommentIsLoading, getNewCommentText } from './newCommentSelectors';
import { NewCommentErrors } from '../../types/NewCommentSchema';

describe('getNewCommentError tests', () => {
  test('get new comment error success', () => {
    const store: DeepPartial<StoreSchema> = {
      newComment: {
        text: '',
        isLoading: false,
        error: NewCommentErrors.EMPTY_COMMENT,
      },
    }
    expect(getNewCommentError(store as StoreSchema)).toEqual(NewCommentErrors.EMPTY_COMMENT)
  })

  test('get new comment error empty state', () => {
    const store: DeepPartial<StoreSchema> = {}
    expect(getNewCommentError(store as StoreSchema)).toEqual(undefined)
  })
})

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
