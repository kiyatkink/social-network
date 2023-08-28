import { ThunkActionCreator } from 'shared/lib/tests/ThunkActionCreator';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

describe('fetchCommentsByArticleId tests', () => {
  test('fetchCommentsByArticleId success', async () => {
    const asyncThunk = new ThunkActionCreator(fetchCommentsByArticleId)
    asyncThunk.mockedAxios.get.mockReturnValue(Promise.resolve({
      data: [{
        id: 'string',
        text: 'string',
        username: 'string',
        profileId: 'string',
        avatar: 'string',
      }],
    }))
    const result = await asyncThunk.callAction('1')

    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('fetchCommentsByArticleId reject', async () => {
    const asyncThunk = new ThunkActionCreator(fetchCommentsByArticleId)
    asyncThunk.mockedAxios.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await asyncThunk.callAction('1')

    expect(result.meta.requestStatus).toBe('rejected')
  })
})
