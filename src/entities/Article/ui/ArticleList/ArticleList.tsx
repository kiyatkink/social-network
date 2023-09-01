import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss'
import { Article, ArticlesView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleSkeletonListItem } from '../ArticleSkeletonListItem/ArticleSkeletonListItem';

interface ArticleListProps {
    className?: string
    articles: Article[]
    view: ArticlesView
    isLoading: boolean
}

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const {
    className, articles, view, isLoading,
  } = props

  const renderSkeletonFunction = useCallback(() => {
    if (view === ArticlesView.TILE) {
      return new Array(15).fill(0).map((el, idx) => <ArticleSkeletonListItem view={view} key={idx} />)
    }
    return new Array(3).fill(0).map((el, idx) => <ArticleSkeletonListItem view={view} key={idx} />)
  }, [view])

  const renderFunction = useCallback(() => articles.map(
    (article, idx) => <ArticleListItem article={article} view={view} key={article.id} />,
  ), [articles, view])

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      { isLoading ? renderSkeletonFunction() : renderFunction()}
    </div>
  );
});
