import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import {
  ArticleBlocksType, ArticleBlockType, ArticleCodeBlock, ArticleType,
} from '../types/article';
import { getArticleData, getArticleError, getArticleIsLoading } from './articleDetail';

const store: DeepPartial<StoreSchema> = {
  article: {
    data: {
      id: 'string',
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
    },
    isLoading: false,
    error: 'error',
  },
}

describe('articleDetail selectors test', () => {
  test('getArticleData test', () => {
    const data = {
      id: 'string',
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
    expect(getArticleData(store as StoreSchema)).toEqual(data)
  })

  test('getArticleData test empty store', () => {
    expect(getArticleData({} as StoreSchema)).toEqual(undefined)
  })

  test('getArticleIsLoading test', () => {
    expect(getArticleIsLoading(store as StoreSchema)).toEqual(false)
  })

  test('getArticleIsLoading test empty store', () => {
    expect(getArticleIsLoading({} as StoreSchema)).toEqual(false)
  })

  test('getArticleError test', () => {
    expect(getArticleError(store as StoreSchema)).toEqual('error')
  })

  test('getArticleError test empty store', () => {
    expect(getArticleError({} as StoreSchema)).toEqual(undefined)
  })
})
