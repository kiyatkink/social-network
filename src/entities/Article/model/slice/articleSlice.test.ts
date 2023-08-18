import { DeepPartial } from '@reduxjs/toolkit';
import { ArticleSchema } from '../types/articleSchema';
import {
  Article, ArticleBlocksType, ArticleBlockType, ArticleType,
} from '../types/article';
import { articleReducer } from './articleSlice';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const data: Article = {
  id: '1',
  title: 'string',
  subtitle: 'string',
  img: 'string',
  views: 123,
  createdAt: 'string',
  type: [ArticleType.IT],
  blocks: [{
    id: 'string',
    type: ArticleBlockType.CODE,
    code: 'string',
  } as ArticleBlocksType],
}

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
    expect(articleReducer(store as ArticleSchema, fetchArticleById.fulfilled(data, '', ''))).toEqual({ isLoading: false, data, error: undefined })
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
