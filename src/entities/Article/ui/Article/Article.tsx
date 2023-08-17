import { FC, memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAsyncReducer } from 'shared/lib/useAsyncReducer/useAsyncReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { articleReducer } from '../../model/slice/articleSlice';
import cls from './Article.module.scss'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/article';

interface ArticleProps {
    className?: string
    id: string,
}

export const Article: FC<ArticleProps> = memo((props: ArticleProps) => {
  const { className, id } = props
  const dispatch = useDispatch()

  const data = useSelector(getArticleData)
  const isLoading = useSelector(getArticleIsLoading)
  const error = useSelector(getArticleError)

  useAsyncReducer('article', articleReducer)

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className={classNames(cls.Article, {}, [className, cls.ArticleIsLoading])}>
        <div className={cls.avatar_wrap}>
          <Skeleton width="20vh" height="20vh" borderRadius="50%" />
        </div>
        <Skeleton width="44vw" height="3vh" />
        <Skeleton width="26vw" height="3vh" />
        <Skeleton width="100%" height="23vh" />
        <Skeleton width="100%" height="23vh" />
      </div>
    );
  }

  return (
    <div className={classNames(cls.Article, {}, [className])}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <span>Hello</span>
    </div>
  );
});
