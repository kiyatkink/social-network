import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NewCommentSchema } from '../types/NewCommentSchema';
import { sendNewComment } from '../services/sendNewComment/sendNewComment';

const initialState: NewCommentSchema = {
  text: '',
  isLoading: false,
  error: undefined,
}

export const newCommentSlice = createSlice({
  name: 'newComment',
  initialState,
  reducers: {
    changeText(store, action: PayloadAction<string>) {
      if (action.payload !== '') {
        store.error = ''
      }
      store.text = action.payload
    },
    changeIsLoading(store, action: PayloadAction<boolean>) {
      store.isLoading = action.payload
    },
    changeError(store, action: PayloadAction<string | undefined>) {
      store.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendNewComment.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(sendNewComment.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(sendNewComment.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: newCommentActions, reducer: newCommentReducer } = newCommentSlice
