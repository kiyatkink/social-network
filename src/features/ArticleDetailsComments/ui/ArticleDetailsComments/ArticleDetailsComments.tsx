import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentsList, SkeletonCommentsList, AddNewComment } from 'entities/Comment';
import { Text, TextSize, TextThems } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useAsyncReducer } from '../../../../shared/lib/hooks/useAsyncReducer/useAsyncReducer';
import cls from './ArticleDetailsComments.module.scss'
import { commentsReducer, commentsSelectors } from '../../model/slice/commentsSlice/commentsSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getCommentsError, getCommentsIsLoading } from '../../model/selectors/commentsSelectors/commentsSelectors';
import { newCommentActions, newCommentReducer } from '../../model/slice/newCommentSlice/newCommentSlice';
import { sendNewComment } from '../../model/services/sendNewComment/sendNewComment';
import {
  getNewCommentError,
  getNewCommentIsLoading,
  getNewCommentText,
} from '../../model/selectors/newCommentSelectors/newCommentSelectors';

interface ArticleCommentsBlockProps {
    className?: string
    id: string,
}

const ArticleDetailsComments: FC<ArticleCommentsBlockProps> = memo((props: ArticleCommentsBlockProps) => {
  const { className, id } = props
  const { t } = useTranslation('article-detail')
  const dispatch = useDispatch()

  const comments = useSelector(commentsSelectors.selectAll)
  const commentsIsLoading = useSelector(getCommentsIsLoading)
  const commentsError = useSelector(getCommentsError)

  const newCommentText = useSelector(getNewCommentText)
  const newCommentIsLoading = useSelector(getNewCommentIsLoading)
  const newCommentError = useSelector(getNewCommentError)

  useAsyncReducer('comments', commentsReducer)
  useAsyncReducer('newComment', newCommentReducer)

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  }, [dispatch, id]);

  const onChangeInputNewComment = useCallback((value: string) => {
    dispatch(newCommentActions.changeText(value))
  }, [dispatch])

  const onSendNewComment = useCallback(() => {
    dispatch(sendNewComment(id))
  }, [dispatch, id])

  if (commentsIsLoading) {
    return (
      <div className={classNames(cls.ArticleCommentsBlock, {}, [className])}>
        <Skeleton width="20vw" height="40px" />
        <SkeletonCommentsList numberOfComments={3} />
      </div>
    );
  }

  if (commentsError) {
    return (
      <div className={classNames(cls.ArticleCommentsBlock, {}, [className])}>
        <Text title={t('Комментарии')} size={TextSize.L} />
        <Text text={t('Не удалось загрузить комментарии')} theme={TextThems.ERROR} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleCommentsBlock, {}, [className])}>
      <Text title={t('Комментарии')} size={TextSize.L} />
      <AddNewComment
        onChangeComment={onChangeInputNewComment}
        onSendComment={onSendNewComment}
        newComment={newCommentText}
        sendIsLoading={newCommentIsLoading}
        error={newCommentError}
      />
      { comments.length ? <CommentsList comments={comments} /> : <Text text={t('Комментарии отсутствуют')} />}
    </div>
  );
});

export default ArticleDetailsComments
