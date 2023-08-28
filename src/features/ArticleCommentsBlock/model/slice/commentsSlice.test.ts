import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { CommentsSchema } from '../types/CommentsSchema';
import { commentsActions, commentsReducer } from './commentsSlice';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const initialStore: CommentsSchema = {
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {},
}

const mockComment: Comment = {
  id: 'string',
  text: 'string',
  username: 'string',
  profileId: 'string',
  avatar: 'string',
}

type InitialStore = EntityState<Comment> & CommentsSchema

describe('commentsSlice tests', () => {
  test('addOneComment test', () => {
    expect(commentsReducer(initialStore as InitialStore, commentsActions.addOneComment(mockComment))).toEqual({ ...initialStore, ids: ['string'], entities: { string: mockComment } })
  })
  test('fetchCommentsByArticleId.pending test', () => {
    expect(commentsReducer(initialStore as InitialStore, fetchCommentsByArticleId.pending('', ''))).toEqual({ ...initialStore, isLoading: true })
  })
  test('fetchCommentsByArticleId.fulfilled test', () => {
    expect(commentsReducer(initialStore as InitialStore, fetchCommentsByArticleId.fulfilled([mockComment], '', ''))).toEqual({ ...initialStore, ids: ['string'], entities: { string: mockComment } })
  })
  test('fetchCommentsByArticleId.rejected test', () => {
    expect(commentsReducer(initialStore as InitialStore, fetchCommentsByArticleId.rejected(null, '', '', 'some_error'))).toEqual({ ...initialStore, error: 'some_error' })
  })
})
