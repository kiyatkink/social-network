import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { getArticleData, getArticleError, getArticleIsLoading } from './articleDetail';
import { ArticleMock } from '../../mocks/data';

const store: DeepPartial<StoreSchema> = {
  article: {
    data: ArticleMock,
    isLoading: false,
    error: 'error',
  },
}

describe('articleDetail selectors test', () => {
  test('getArticleData test', () => {
    expect(getArticleData(store as StoreSchema)).toEqual(ArticleMock)
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
