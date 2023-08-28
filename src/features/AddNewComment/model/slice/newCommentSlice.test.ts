import { NewCommentSchema } from '../types/NewCommentSchema';
import { newCommentActions, newCommentReducer } from './newCommentSlice';
import { sendNewComment } from '../services/sendNewComment/sendNewComment';
import { ThunkApi } from '../types/newComment';

const initialState: NewCommentSchema = {
  text: '',
  isLoading: false,
  error: undefined,
}
describe('newCommentSlice tests', () => {
  test('changeText test', () => {
    expect(newCommentReducer(initialState as NewCommentSchema, newCommentActions.changeText('some_text'))).toEqual({ ...initialState, text: 'some_text', error: '' })
  })
  test('changeIsLoading test', () => {
    expect(newCommentReducer(initialState as NewCommentSchema, newCommentActions.changeIsLoading(true))).toEqual({ ...initialState, isLoading: true })
  })
  test('changeIsLoading test', () => {
    expect(newCommentReducer(initialState as NewCommentSchema, newCommentActions.changeError('some_error'))).toEqual({ ...initialState, error: 'some_error' })
  })
  test('sendNewComment.pending test', () => {
    const senderFunction = jest.fn(async (newComment: string, thunkApi: ThunkApi) => {})
    expect(newCommentReducer(initialState as NewCommentSchema, sendNewComment.pending('', senderFunction))).toEqual({ ...initialState, isLoading: true })
  })
  test('sendNewComment.fulfilled test', () => {
    const senderFunction = jest.fn(async (newComment: string, thunkApi: ThunkApi) => {})
    expect(newCommentReducer(initialState as NewCommentSchema, sendNewComment.fulfilled(undefined as void, '', senderFunction))).toEqual({ ...initialState })
  })
  test('sendNewComment.fulfilled test', () => {
    const senderFunction = jest.fn(async (newComment: string, thunkApi: ThunkApi) => {})
    expect(newCommentReducer(initialState as NewCommentSchema, sendNewComment.rejected(null, '', senderFunction, 'some_error'))).toEqual({ ...initialState, error: 'some_error' })
  })
})
