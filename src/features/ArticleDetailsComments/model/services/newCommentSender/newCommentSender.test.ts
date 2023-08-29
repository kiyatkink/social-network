import axios from 'axios';
import { getArticleData } from 'entities/Article';
import { getUserData } from 'entities/User';
import { CommentMock, NewCommentErrors, ThunkApi } from 'entities/Comment';
import { newCommentSender } from './newCommentSender';

jest.mock('axios');

jest.mock('entities/User', () => ({
  getUserData: jest.fn(() => ({ id: '1' })),
}))

jest.mock('entities/Article', () => ({
  getArticleData: jest.fn(() => ({ id: '1' })),
}))

const thunkApi = {
  extra: {
    api: axios as jest.Mocked<typeof axios>,
  },
  dispatch: jest.fn(),
  getState: jest.fn(),
}

describe('newCommentSender tests', () => {
  test('new comment send success', async () => {
    thunkApi.extra.api.post.mockReturnValue(Promise.resolve({
      data: CommentMock,
    }))

    await newCommentSender('some_comment', thunkApi as Partial<ThunkApi> as ThunkApi)

    expect(getUserData).toHaveBeenCalledTimes(1)
    expect(getArticleData).toHaveBeenCalledTimes(1)
    expect(thunkApi.extra.api.post).toHaveBeenCalledTimes(1)
    expect(thunkApi.dispatch).toHaveBeenCalledTimes(1)
  })

  test('new comment send error, not get userId', async () => {
    jest.mock('entities/User', () => ({
      getUserData: jest.fn(() => undefined),
    }))

    try {
      await newCommentSender('some_comment', thunkApi as Partial<ThunkApi> as ThunkApi)
    } catch (error) {
      expect(getUserData).toHaveBeenCalledTimes(1)
      expect(getArticleData).toHaveBeenCalledTimes(1)
      expect(thunkApi.extra.api.post).toHaveBeenCalledTimes(0)
      expect(thunkApi.dispatch).toHaveBeenCalledTimes(0)
      expect(error).toHaveProperty('message', NewCommentErrors.FAILED_TO_SEND_COMMENT);
    }
  })

  test('new comment send error, not get articleId', async () => {
    jest.mock('entities/Article', () => ({
      getArticleData: jest.fn(() => undefined),
    }))

    try {
      await newCommentSender('some_comment', thunkApi as Partial<ThunkApi> as ThunkApi)
    } catch (error) {
      expect(getUserData).toHaveBeenCalledTimes(1)
      expect(getArticleData).toHaveBeenCalledTimes(1)
      expect(thunkApi.extra.api.post).toHaveBeenCalledTimes(0)
      expect(thunkApi.dispatch).toHaveBeenCalledTimes(0)
      expect(error).toHaveProperty('message', NewCommentErrors.FAILED_TO_SEND_COMMENT);
    }
  })

  test('new comment send error, not response.data', async () => {
    thunkApi.extra.api.post.mockReturnValue(Promise.resolve({ status: 403 }))

    try {
      await newCommentSender('some_comment', thunkApi as Partial<ThunkApi> as ThunkApi)
    } catch (error) {
      expect(getUserData).toHaveBeenCalledTimes(1)
      expect(getArticleData).toHaveBeenCalledTimes(1)
      expect(thunkApi.extra.api.post).toHaveBeenCalledTimes(1)
      expect(thunkApi.dispatch).toHaveBeenCalledTimes(0)
      expect(error).toHaveProperty('message', NewCommentErrors.FAILED_TO_SAVE_COMMENT);
    }
  })
})
