import { createAsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { ExtraType, StoreSchema, ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';
import { BaseThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk';
import { getNewCommentText } from '../../selectors/getNewCommentText/getNewCommentText';
import { NewCommentErrors } from '../../types/newComment';
import { newCommentActions } from '../../slice/newCommentSlice';

type ThunkApi = BaseThunkAPI<StoreSchema, ExtraType, Dispatch, string>
type SendFunctionType = (newComment: string, thunkAPI: ThunkApi) => Promise<void>
export const sendNewComment = createAsyncThunk<void, SendFunctionType, ThunkApiConfig<string>>(
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
