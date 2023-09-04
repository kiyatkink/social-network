import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PageSchema } from '../types/PageSchema';

const initialState: PageSchema = {
  scroll: {},
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setScrollForPath: (state, { payload }: PayloadAction<{ path: string, scrollTo: number }>) => {
      state.scroll[payload.path] = payload.scrollTo
    },
  },
})

export const { actions: pageActions, reducer: pageReducer } = pageSlice
