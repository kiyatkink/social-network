import { NewCommentErrors, NewCommentSchema } from '../../types/NewCommentSchema';
import { newCommentActions, newCommentReducer } from './newCommentSlice';
import { sendNewComment } from '../../services/sendNewComment/sendNewComment';

const initialState: NewCommentSchema = {
  text: '',
  isLoading: false,
  error: undefined,
}
describe('newCommentSlice tests', () => {
  test('changeText test', () => {
    expect(newCommentReducer(initialState as NewCommentSchema, newCommentActions.changeText('some_text'))).toEqual({ ...initialState, text: 'some_text' })
  })
  test('changeIsLoading test', () => {
    expect(newCommentReducer(initialState as NewCommentSchema, newCommentActions.changeIsLoading(true))).toEqual({ ...initialState, isLoading: true })
  })
  test('changeIsLoading test', () => {
    expect(newCommentReducer(initialState as NewCommentSchema, newCommentActions.changeError(NewCommentErrors.EMPTY_COMMENT))).toEqual({ ...initialState, error: NewCommentErrors.EMPTY_COMMENT })
  })
  test('sendNewComment.pending test', () => {
    expect(newCommentReducer(initialState as NewCommentSchema, sendNewComment.pending('', '1'))).toEqual({ ...initialState, isLoading: true })
  })
  test('sendNewComment.fulfilled test', () => {
    expect(newCommentReducer(initialState as NewCommentSchema, sendNewComment.fulfilled(undefined as void, '', '1'))).toEqual({ ...initialState })
  })
  test('sendNewComment.rejected test', () => {
    expect(newCommentReducer(initialState as NewCommentSchema, sendNewComment.rejected(null, '', '1', NewCommentErrors.FAILED_TO_SEND_COMMENT))).toEqual({ ...initialState, error: NewCommentErrors.FAILED_TO_SEND_COMMENT })
  })
})
