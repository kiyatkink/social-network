import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentsList, SkeletonCommentsList } from 'entities/Comment';
import { Text, TextSize, TextThems } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next';
import { useAsyncReducer } from 'shared/lib/useAsyncReducer/useAsyncReducer';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewComment } from 'features/AddNewComment';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleCommentsBlock.module.scss'
import { commentsReducer, commentsSelectors } from '../../model/slice/commentsSlice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getCommentsIsLoading } from '../../model/selectors/getCommentsIsLoading/getCommentsIsLoading';
import { getCommentsError } from '../../model/selectors/getCommentsError/getCommentsError';
import { sendNewComment } from '../../model/services/sendNewComment/sendNewComment';

interface ArticleCommentsBlockProps {
    className?: string
    id: string,
}

const ArticleCommentsBlock: FC<ArticleCommentsBlockProps> = memo((props: ArticleCommentsBlockProps) => {
  const { className, id } = props
  const { t } = useTranslation('article-detail')
  const dispatch = useDispatch()
  const comments = useSelector(commentsSelectors.selectAll)
  const isLoading = useSelector(getCommentsIsLoading)
  const error = useSelector(getCommentsError)

  useAsyncReducer('comments', commentsReducer)

  useEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  }, [dispatch, id]);

  const onSendNewComment = useCallback((value: string) => () => {
    dispatch(sendNewComment(value))
  }, [dispatch])

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleCommentsBlock, {}, [className])}>
        <Skeleton width="20vw" height="40px" />
        <SkeletonCommentsList numberOfComments={3} />
      </div>
    );
  }

  if (error) {
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
      <AddNewComment sendNewComment={onSendNewComment} />
      { comments.length ? <CommentsList comments={comments} /> : <Text text={t('Комментарии отсутствуют')} />}
    </div>
  );
});

export default ArticleCommentsBlock
