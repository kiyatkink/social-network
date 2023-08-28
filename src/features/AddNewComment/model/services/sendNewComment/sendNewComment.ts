import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';
import { getNewCommentText } from '../../selectors/getNewCommentText/getNewCommentText';
import { NewCommentErrors, SenderFnType, ThunkApi } from '../../types/newComment';
import { newCommentActions } from '../../slice/newCommentSlice';

export const sendNewComment = createAsyncThunk<void, SenderFnType, ThunkApiConfig<string>>(
  'newComment/newCommentSender',
  async (sendFunction, thunkAPI) => {
    const {
      rejectWithValue, dispatch, getState,
    } = thunkAPI
    try {
      const newComment = getNewCommentText(getState() as StoreSchema)

      if (newComment === '') {
        throw Error(NewCommentErrors.EMPTY_COMMENT)
      }

      await sendFunction(newComment, thunkAPI as ThunkApi)

      dispatch(newCommentActions.changeText(''))
    } catch (e) {
      const result = (e as Error).message;
      return rejectWithValue(result)
    }
  },
)
