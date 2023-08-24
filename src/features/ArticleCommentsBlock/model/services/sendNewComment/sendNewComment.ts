import { createAsyncThunk } from '@reduxjs/toolkit';
import { StoreSchema, ThunkApiConfig } from 'app/StoreProvider/types/StoreSchema';
import { Comment } from 'entities/Comment/model/types/comment'
import { getUserData } from 'entities/User';
import { getArticleData } from 'entities/Article';
import { newCommentActions, NewCommentErrors } from 'features/AddNewComment';

const checkUserIdAndArticleId = (userId: string | undefined, articleId: string | undefined) => {
  if (!userId || !articleId) throw Error(NewCommentErrors.FAILED_TO_SEND_COMMENT)
}
const checkEmptyNewComment = (newComment: string) => {
  if (newComment === '') throw Error(NewCommentErrors.EMPTY_COMMENT)
}

const checkFailedResponse = (data: Comment | undefined) => {
  if (!data) throw Error(NewCommentErrors.FAILED_TO_SAVE_COMMENT)
}
export const sendNewComment = createAsyncThunk<Comment, string, ThunkApiConfig<string>>(
  'comments/sendNewComment',
  async (newComment, thunkAPI) => {
    const {
      rejectWithValue, extra, dispatch, getState,
    } = thunkAPI

    dispatch(newCommentActions.changeError(''))
    dispatch(newCommentActions.changeIsLoading(true))

    try {
      const userId = getUserData(getState() as StoreSchema)?.id
      const articleId = getArticleData(getState() as StoreSchema)?.id

      checkUserIdAndArticleId(userId, articleId)

      checkEmptyNewComment(newComment)

      const response = await extra.api.post<Comment>(`/article_comments/${articleId}`, { text: newComment, userId })

      checkFailedResponse(response.data)

      dispatch(newCommentActions.changeText(''))
      dispatch(newCommentActions.changeIsLoading(false))

      return response.data
    } catch (e) {
      const result = (e as Error).message;
      dispatch(newCommentActions.changeError(result))
      dispatch(newCommentActions.changeIsLoading(false))
      return rejectWithValue(result)
    }
  },
)
