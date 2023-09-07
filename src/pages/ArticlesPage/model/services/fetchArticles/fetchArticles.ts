import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';
import { Article } from 'entities/Article';
import { getArticleFilters } from 'features/ArticleFilters';
import { getArticlesListPage } from '../../selectors/articlesListSelectors/articlesListSelectors';
import { articlesListActions } from '../../slice/articlesListSlice/articlesListSlice';

export const fetchArticles = createAsyncThunk<Article[], void, ThunkApiConfig<string>>(
  'articlesPage/fetchArticles',
  async (_, thunkAPI) => {
    const {
      rejectWithValue, extra, dispatch, getState,
    } = thunkAPI
    try {
      const page = getArticlesListPage(getState() as StoreSchema)
      const limit = 5
      const {
        sort, type, search, order,
      } = getArticleFilters(getState() as StoreSchema)

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
          _search: search,
          _type: type,
        },
      })
      if (!response.data) {
        throw new Error()
      }

      if (response.data.length < limit) {
        dispatch(articlesListActions.changeHasMore(false))
      }
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
