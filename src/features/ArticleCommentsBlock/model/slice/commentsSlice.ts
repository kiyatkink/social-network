import {
  createEntityAdapter, createSlice, EntityState,
} from '@reduxjs/toolkit'
import { Comment } from 'entities/Comment';
import { StoreSchema } from 'app/StoreProvider';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { CommentsSchema } from '../types/CommentsSchema';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
})

export const commentsSelectors = commentsAdapter.getSelectors<StoreSchema>(
  (store) => (store.comments || commentsAdapter.getInitialState()) as EntityState<Comment>,
)

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsAdapter.getInitialState<CommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
        state.isLoading = false
        commentsAdapter.addMany(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: commentsActions, reducer: commentsReducer } = commentsSlice
