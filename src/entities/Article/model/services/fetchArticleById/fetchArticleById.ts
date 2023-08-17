import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkApiConfig<string>>(
  'article/fetchArticleById',
  async (id, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const response = await extra.api.get<Article>(`/articles/${id}`)
      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
