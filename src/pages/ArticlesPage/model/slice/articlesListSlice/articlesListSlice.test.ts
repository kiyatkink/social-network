import { DeepPartial } from '@reduxjs/toolkit';
import { ArticleMock, ArticlesView } from 'entities/Article';
import { ArticlesListSchema } from '../../types/ArticlesListSchema';
import { articlesListActions, articlesListReducer } from './articlesListSlice';
import { fetchArticles } from '../../services/fetchArticles/fetchArticles';

const initialStore: ArticlesListSchema = {
  isLoading: false,
  error: undefined,
  view: ArticlesView.TILE,
  ids: [],
  entities: {},
  hasMore: true,
  page: 1,
}

describe('articlesListSlice tests', () => {
  test('setView action', () => {
    const store: DeepPartial<ArticlesListSchema> = initialStore
    expect(articlesListReducer(
        store as ArticlesListSchema,
        articlesListActions.setView(ArticlesView.LIST),
    )).toEqual({ ...initialStore, view: ArticlesView.LIST })
  })

  test('changeHasMore action', () => {
    const store: DeepPartial<ArticlesListSchema> = initialStore
    expect(articlesListReducer(
            store as ArticlesListSchema,
            articlesListActions.changeHasMore(false),
    )).toEqual({ ...initialStore, hasMore: false })
  })

  test('changePage action', () => {
    const store: DeepPartial<ArticlesListSchema> = initialStore
    expect(articlesListReducer(
            store as ArticlesListSchema,
            articlesListActions.changePage(2),
    )).toEqual({ ...initialStore, page: 2 })
  })

  test('fetchArticles.pending action', () => {
    const store: DeepPartial<ArticlesListSchema> = initialStore
    expect(articlesListReducer(
            store as ArticlesListSchema,
            fetchArticles.pending(''),
    )).toEqual({ ...initialStore, isLoading: true, error: undefined })
  })

  test('fetchArticles.fulfilled action', () => {
    const store: DeepPartial<ArticlesListSchema> = initialStore
    expect(articlesListReducer(
            store as ArticlesListSchema,
            fetchArticles.fulfilled([ArticleMock], ''),
    )).toEqual({
      ...initialStore,
      page: 2,
      ids: [ArticleMock.id],
      entities: {
        [ArticleMock.id]: ArticleMock,
      },
    })
  })

  test('fetchArticles.rejected action', () => {
    const store: DeepPartial<ArticlesListSchema> = initialStore
    expect(articlesListReducer(
            store as ArticlesListSchema,
            fetchArticles.rejected(null, '', undefined as void, 'error'),
    )).toEqual({ ...initialStore, error: 'error' })
  })
})
