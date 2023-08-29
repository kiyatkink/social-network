import { EntityState } from '@reduxjs/toolkit';
import { Comment, CommentMock } from '../../../../../entities/Comment';
import { CommentsSchema } from '../../types/CommentsSchema';
import { commentsActions, commentsReducer } from './commentsSlice';
import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const initialStore: CommentsSchema = {
  isLoading: false,
  error: undefined,
  ids: [],
  entities: {},
}

type InitialStore = EntityState<Comment> & CommentsSchema

describe('commentsSlice tests', () => {
  test('addOneComment test', () => {
    expect(commentsReducer(initialStore as InitialStore, commentsActions.addOneComment(CommentMock))).toEqual({ ...initialStore, ids: ['1'], entities: { '1': CommentMock } })
  })
  test('fetchCommentsByArticleId.pending test', () => {
    expect(commentsReducer(initialStore as InitialStore, fetchCommentsByArticleId.pending('', ''))).toEqual({ ...initialStore, isLoading: true })
  })
  test('fetchCommentsByArticleId.fulfilled test', () => {
    expect(commentsReducer(initialStore as InitialStore, fetchCommentsByArticleId.fulfilled([CommentMock], '', ''))).toEqual({ ...initialStore, ids: ['1'], entities: { '1': CommentMock } })
  })
  test('fetchCommentsByArticleId.rejected test', () => {
    expect(commentsReducer(initialStore as InitialStore, fetchCommentsByArticleId.rejected(null, '', '', 'some_error'))).toEqual({ ...initialStore, error: 'some_error' })
  })
})
