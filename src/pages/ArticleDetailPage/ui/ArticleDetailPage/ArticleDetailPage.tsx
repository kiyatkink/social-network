import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetail } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleCommentsBlock } from 'features/ArticleDetailsComments';
import { Page } from 'widgets/Page';
import cls from './ArticleDetailPage.module.scss'

interface ArticleDetailPageProps {
    className?: string
}

const ArticleDetailPage: FC<ArticleDetailPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation('article-detail')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <Page disableSaveScroll className={classNames(cls.ArticleDetailPage, {}, [className])}>
      <ArticleDetail id={id} />
      <ArticleCommentsBlock id={id} />
    </Page>
  );
};

export default memo(ArticleDetailPage)
