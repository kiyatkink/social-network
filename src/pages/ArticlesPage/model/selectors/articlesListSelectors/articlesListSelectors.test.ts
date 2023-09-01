import { DeepPartial } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/StoreProvider';
import { ArticlesView } from 'entities/Article';
import { ArticlesListSchema } from '../../types/ArticlesListSchema';
import {
  getArticlesListError, getArticlesListHasMore,
  getArticlesListIsLoading,
  getArticlesListPage,
  getArticlesListView,
} from './articlesListSelectors';

const initialStore: ArticlesListSchema = {
  isLoading: false,
  error: undefined,
  view: ArticlesView.TILE,
  ids: [],
  entities: {},
  hasMore: true,
  page: 1,
}

describe('getArticlesListView tests', () => {
  test('getArticlesListView success ', () => {
    const store: DeepPartial<StoreSchema> = { articlesList: initialStore }
    expect(getArticlesListView(store as StoreSchema)).toEqual(ArticlesView.TILE)
  })

  test('getArticlesListView empty store ', () => {
    const store: DeepPartial<StoreSchema> = {}
    expect(getArticlesListView(store as StoreSchema)).toEqual(ArticlesView.LIST)
  })
})

describe('getArticlesListError tests', () => {
  test('getArticlesListError success ', () => {
    const store: DeepPartial<StoreSchema> = { articlesList: { ...initialStore, error: 'error' } }
    expect(getArticlesListError(store as StoreSchema)).toEqual('error')
  })

  test('getArticlesListError empty store ', () => {
    const store: DeepPartial<StoreSchema> = {}
    expect(getArticlesListError(store as StoreSchema)).toEqual('')
  })
})

describe('getArticlesListIsLoading tests', () => {
  test('getArticlesListIsLoading success ', () => {
    const store: DeepPartial<StoreSchema> = { articlesList: { ...initialStore, isLoading: true } }
    expect(getArticlesListIsLoading(store as StoreSchema)).toEqual(true)
  })

  test('getArticlesListIsLoading empty store ', () => {
    const store: DeepPartial<StoreSchema> = {}
    expect(getArticlesListIsLoading(store as StoreSchema)).toEqual(false)
  })
})

describe('getArticlesListPage tests', () => {
  test('getArticlesListPage success ', () => {
    const store: DeepPartial<StoreSchema> = { articlesList: { ...initialStore, page: 8 } }
    expect(getArticlesListPage(store as StoreSchema)).toEqual(8)
  })

  test('getArticlesListPage empty store ', () => {
    const store: DeepPartial<StoreSchema> = {}
    expect(getArticlesListPage(store as StoreSchema)).toEqual(1)
  })
})

describe('getArticlesListHasMore tests', () => {
  test('getArticlesListHasMore success ', () => {
    const store: DeepPartial<StoreSchema> = { articlesList: initialStore }
    expect(getArticlesListHasMore(store as StoreSchema)).toEqual(true)
  })

  test('getArticlesListHasMore empty store ', () => {
    const store: DeepPartial<StoreSchema> = {}
    expect(getArticlesListHasMore(store as StoreSchema)).toEqual(false)
  })
})
