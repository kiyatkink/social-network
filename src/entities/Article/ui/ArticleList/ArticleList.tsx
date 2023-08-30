import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss'
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string
    articles: Article[]
    view: ArticleView
}

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const { className, articles, view } = props

  const renderFunction = useCallback(() => articles.map(
    (article) => <ArticleListItem article={article} view={view} key={article.id} />,
  ), [articles, view])

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {renderFunction()}
    </div>
  );
});
