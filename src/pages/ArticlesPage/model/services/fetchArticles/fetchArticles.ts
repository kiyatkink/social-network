import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';
import { Article } from 'entities/Article';
import { getArticlesListPage } from '../../selectors/articlesListSelectors/articlesListSelectors';
import { articlesListActions } from '../../slice/articlesListSlice';

export const fetchArticles = createAsyncThunk<Article[], void, ThunkApiConfig<string>>(
  'articlesPage/fetchArticles',
  async (_, thunkAPI) => {
    const {
      rejectWithValue, extra, dispatch, getState,
    } = thunkAPI
    try {
      const page = getArticlesListPage(getState() as StoreSchema)
      const limit = 5

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _page: page,
          _limit: limit,
        },
      })
      if (!response.data) {
        throw new Error()
      }

      if (response.data.length < limit) {
        dispatch(articlesListActions.changeHasMore(false))
      }

      dispatch(articlesListActions.changePage(page + 1))
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
