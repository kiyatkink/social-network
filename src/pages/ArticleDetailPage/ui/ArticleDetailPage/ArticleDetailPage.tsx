import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailPage.module.scss'

interface ArticleDetailPageProps {
    className?: string
}

const ArticleDetailPage: FC<ArticleDetailPageProps> = (props) => {
  const { className } = props
  return (
    <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
      ARTICLE_DETAIL
    </div>
  );
};

export default ArticleDetailPage
