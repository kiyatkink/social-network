import { StoreSchema } from 'app/StoreProvider/types/StoreSchema';
import { Comment } from 'entities/Comment/model/types/comment'
import { getUserData } from 'entities/User';
import { getArticleData } from 'entities/Article';
import { NewCommentErrors, SenderFnType, ThunkApi } from 'entities/Comment';
import { commentsActions } from '../../slice/commentsSlice';

export const newCommentSender: SenderFnType = async (
  newComment: string,
  thunkAPI: ThunkApi,
) => {
  const { extra, dispatch, getState } = thunkAPI

  const userId = getUserData(getState() as StoreSchema)?.id
  const articleId = getArticleData(getState() as StoreSchema)?.id

  if (!userId || !articleId) {
    throw Error(NewCommentErrors.FAILED_TO_SEND_COMMENT)
  }

  const response = await extra.api.post<Comment>(`/article_comments/${articleId}`, { text: newComment, userId })

  if (!response.data) {
    throw Error(NewCommentErrors.FAILED_TO_SAVE_COMMENT)
  }

  dispatch(commentsActions.addOneComment(response.data))
}
