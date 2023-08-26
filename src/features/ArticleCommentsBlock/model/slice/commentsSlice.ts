import {
  createEntityAdapter, createSlice, EntityState, PayloadAction,
} from '@reduxjs/toolkit'
import { Comment } from 'entities/Comment';
import { StoreSchema } from 'app/StoreProvider';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { CommentsSchema } from '../types/CommentsSchema';
import { newCommentSender } from '../services/newCommentSender/newCommentSender';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
  sortComparer: (a, b) => +b.id - +a.id,
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
  reducers: {
    addOneComment(state, action: PayloadAction<Comment>) {
      commentsAdapter.addOne(state, action.payload);
    },
  },
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
