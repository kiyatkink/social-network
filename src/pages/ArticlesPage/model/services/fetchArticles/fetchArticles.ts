import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';
import { Article } from 'entities/Article';

export const fetchArticles = createAsyncThunk<Article[], void, ThunkApiConfig<string>>(
  'articlesPage/fetchArticles',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get<Article[]>('/articles')
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
