import { DeepPartial } from '@reduxjs/toolkit';
import { ArticleSchema } from '../types/articleSchema';
import { articleReducer } from './articleSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleMock } from '../../mocks/data';

describe('articleSlice tests', () => {
  test('fetchArticleById pending', () => {
    const store: DeepPartial<ArticleSchema> = {
      isLoading: false,
      data: undefined,
    }
    expect(articleReducer(store as ArticleSchema, fetchArticleById.pending)).toEqual({ error: undefined, isLoading: true, data: undefined })
  })

  test('fetchArticleById fulfilled', () => {
    const store: DeepPartial<ArticleSchema> = {
      isLoading: true,
      data: undefined,
      error: undefined,
    }
    expect(articleReducer(store as ArticleSchema, fetchArticleById.fulfilled(ArticleMock, '', ''))).toEqual({ isLoading: false, data: ArticleMock, error: undefined })
  })

  test('fetchArticleById rejected', () => {
    const store: DeepPartial<ArticleSchema> = {
      isLoading: true,
      data: undefined,
      error: undefined,
    }
    expect(articleReducer(store as ArticleSchema, fetchArticleById.rejected(new Error(), '', '', 'error'))).toEqual({ isLoading: false, error: 'error', data: undefined })
  })
})
