import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  ArticleFiltersSchema, FilterArticleType, OrderType, SortType,
} from '../../types/ArticleFiltersSchema';

export const initialState: ArticleFiltersSchema = {
  sort: '',
  order: '',
  search: '',
  type: '',
}

export const articleFiltersSlice = createSlice({
  name: 'articleFilters',
  initialState,
  reducers: {
    changeSort: (state, action: PayloadAction<SortType>) => {
      if (state.sort === '') {
        state.order = 'ask'
      }
      state.sort = action.payload
      if (action.payload === '') {
        state.order = action.payload
      }
    },
    changeOrder: (state, action: PayloadAction<OrderType>) => {
      state.order = action.payload
    },
    changeSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    changeType: (state, action: PayloadAction<FilterArticleType>) => {
      if (state.type === action.payload) {
        state.type = ''
      } else {
        state.type = action.payload
      }
    },
  },
})

export const { actions: articleFiltersActions, reducer: articleFiltersReducer } = articleFiltersSlice
