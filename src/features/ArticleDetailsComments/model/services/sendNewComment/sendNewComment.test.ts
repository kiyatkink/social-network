import { ThunkActionCreator } from 'shared/lib/tests/ThunkActionCreator';
import { CommentMock } from 'entities/Comment';
import { getUserData } from 'entities/User';
import { sendNewComment } from './sendNewComment';
import { getNewCommentText } from '../../selectors/newCommentSelectors/newCommentSelectors';
import { NewCommentErrors } from '../../types/NewCommentSchema';

jest.mock('../../selectors/newCommentSelectors/newCommentSelectors', () => ({
  getNewCommentText: jest.fn(() => 'new_comment'),
}));

jest.mock('entities/User', () => ({
  getUserData: jest.fn(() => ({ id: '1' })),
}));

describe('sendNewComment tests', () => {
  test('sendNewComment success', async () => {
    const asyncThunk = new ThunkActionCreator(sendNewComment)
    asyncThunk.mockedAxios.post.mockReturnValue(Promise.resolve({ data: CommentMock }))
    const result = await asyncThunk.callAction('1')

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(getNewCommentText).toHaveBeenCalledTimes(1)
    expect(getUserData).toHaveBeenCalledTimes(1)
  })

  test('sendNewComment reject', async () => {
    const asyncThunk = new ThunkActionCreator(sendNewComment)
    asyncThunk.mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await asyncThunk.callAction('1')

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe(NewCommentErrors.FAILED_TO_SAVE_COMMENT)
    expect(getNewCommentText).toHaveBeenCalledTimes(1)
    expect(getUserData).toHaveBeenCalledTimes(1)
  })
})
