import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';
import { getUserData } from 'entities/User';
import { Comment } from 'entities/Comment';
import { getNewCommentText } from '../../selectors/newCommentSelectors/newCommentSelectors';
import { NewCommentErrors } from '../../types/NewCommentSchema';
import { newCommentActions } from '../../slice/newCommentSlice/newCommentSlice';
import { commentsActions } from '../../slice/commentsSlice/commentsSlice';

export const sendNewComment = createAsyncThunk<void, string, ThunkApiConfig<NewCommentErrors>>(
  'newComment/newCommentSender',
  async (articleId, thunkAPI) => {
    const {
      rejectWithValue, dispatch, extra, getState,
    } = thunkAPI
    try {
      const newComment = getNewCommentText(getState() as StoreSchema)

      if (newComment === '') {
        throw Error(NewCommentErrors.EMPTY_COMMENT)
      }

      const userId = getUserData(getState() as StoreSchema)?.id

      if (!userId || !articleId) {
        throw Error(NewCommentErrors.FAILED_TO_SEND_COMMENT)
      }

      const response = await extra.api.post<Comment>(`/article_comments/${articleId}`, { text: newComment, userId })

      if (!response.data) {
        throw Error(NewCommentErrors.FAILED_TO_SAVE_COMMENT)
      }

      dispatch(commentsActions.addOneComment(response.data))
      dispatch(newCommentActions.changeText(''))
    } catch (e) {
      const result = (e as Error).message as NewCommentErrors;
      return rejectWithValue(result)
    }
  },
)
