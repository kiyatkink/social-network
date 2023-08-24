import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NewCommentSchema } from '../types/NewCommentSchema';

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
      store.text = action.payload
    },
    changeIsLoading(store, action: PayloadAction<boolean>) {
      store.isLoading = action.payload
    },
    changeError(store, action: PayloadAction<string | undefined>) {
      store.error = action.payload
    },
  },
})

export const { actions: newCommentActions, reducer: newCommentReducer } = newCommentSlice
