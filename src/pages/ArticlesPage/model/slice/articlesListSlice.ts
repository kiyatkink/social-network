import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Article, ArticlesView } from 'entities/Article';
import { StoreSchema } from 'app/StoreProvider';
import { ARTICLES_VIEW_TYPE } from 'shared/consts/localstorage';
import { ArticlesListSchema } from '../types/ArticlesListSchema';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';

const articlesListAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})

const initialStore: ArticlesListSchema = {
  isLoading: false,
  error: undefined,
  view: localStorage.getItem(ARTICLES_VIEW_TYPE) as ArticlesView | ArticlesView.LIST,
  ids: [],
  entities: {},
}

export const articlesListSelectors = articlesListAdapter.getSelectors<StoreSchema>(
  (store) => store.articlesList || initialStore,
)

export const articlesListSlice = createSlice({
  name: 'articlesList',
  initialState: articlesListAdapter.getInitialState<ArticlesListSchema>(initialStore),
  reducers: {
    setView: (state, action: PayloadAction<ArticlesView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLES_VIEW_TYPE, action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false
        articlesListAdapter.setMany(state, action.payload)
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: articlesListActions, reducer: articlesListReducer } = articlesListSlice
