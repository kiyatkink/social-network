import { ThunkActionCreator } from '../../../../../shared/lib/tests/ThunkActionCreator';
import { sendNewComment } from './sendNewComment';
import { ThunkApi } from '../../types/newComment';
import { getNewCommentText } from '../../selectors/getNewCommentText/getNewCommentText';

jest.mock('../../selectors/getNewCommentText/getNewCommentText', () => ({
  getNewCommentText: jest.fn(() => 'new_comment'),
}));

describe('sendNewComment tests', () => {
  test('sendNewComment success', async () => {
    const senderFunction = jest.fn(async (newComment: string, thunkApi: ThunkApi) => {})
    const asyncThunk = new ThunkActionCreator(sendNewComment)
    const result = await asyncThunk.callAction(senderFunction)

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(senderFunction).toHaveBeenCalledTimes(1)
    expect(getNewCommentText).toHaveBeenCalledTimes(1)
  })

  test('sendNewComment reject', async () => {
    const senderFunction = jest.fn(async (newComment: string, thunkApi: ThunkApi) => {
      throw Error('some_error')
    })
    const asyncThunk = new ThunkActionCreator(sendNewComment)
    const result = await asyncThunk.callAction(senderFunction)

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('some_error')
    expect(senderFunction).toHaveBeenCalledTimes(1)
    expect(getNewCommentText).toHaveBeenCalledTimes(1)
  })
})
