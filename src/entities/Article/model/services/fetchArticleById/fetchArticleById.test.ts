import { ThunkActionCreator } from 'shared/lib/tests/ThunkActionCreator';
import { fetchArticleById } from './fetchArticleById';
import { Article } from '../../types/article';
import { ArticleMock } from '../../../mocks/data';

const data: Article = ArticleMock

describe('fetchArticleById tests', () => {
  test('fetch article by id success', async () => {
    const asyncThunk = new ThunkActionCreator(fetchArticleById)
    asyncThunk.mockedAxios.get.mockResolvedValue(Promise.resolve({ data }))
    const result = await asyncThunk.callAction('1')

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('fetch fetch article by id not success', async () => {
    const asyncThunk = new ThunkActionCreator(fetchArticleById)
    asyncThunk.mockedAxios.get.mockResolvedValue(Promise.resolve({ status: 403 }))
    const result = await asyncThunk.callAction('1')

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual('error')
  })
})
