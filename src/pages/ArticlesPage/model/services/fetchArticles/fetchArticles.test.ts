import { ThunkActionCreator } from 'shared/lib/tests/ThunkActionCreator';
import { ArticleMock } from 'entities/Article';
import { fetchArticles } from './fetchArticles';

jest.mock('../../selectors/articlesListSelectors/articlesListSelectors')

jest.mock('features/ArticleFilters', () => ({
  getArticleFilters: jest.fn(() => ({
    sort: '', order: '', search: '', type: '',
  })),
}))

describe('fetchArticles tests', () => {
  test('fetchArticles success', async () => {
    const asyncThunk = new ThunkActionCreator(fetchArticles)
    asyncThunk.mockedAxios.get.mockReturnValue(Promise.resolve({
      data: [ArticleMock, ArticleMock],
    }))
    const result = await asyncThunk.callAction()

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(asyncThunk.dispatch).toBeCalledTimes(3)
  })

  test('fetchArticles reject', async () => {
    const asyncThunk = new ThunkActionCreator(fetchArticles)
    asyncThunk.mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await asyncThunk.callAction()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(asyncThunk.dispatch).toBeCalledTimes(2)
  })
})
