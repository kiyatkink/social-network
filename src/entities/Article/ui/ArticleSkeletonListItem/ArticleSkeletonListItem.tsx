import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleSkeletonListItem.module.scss'
import { ArticleView } from '../../model/types/article';

interface ArticleSkeletonListItemProps {
    className?: string
    view: ArticleView
}

export const ArticleSkeletonListItem: FC<ArticleSkeletonListItemProps> = memo((props: ArticleSkeletonListItemProps) => {
  const { className, view } = props

  if (view === 'TILE') {
    return (
      <div className={classNames(cls.ArticleSkeletonListItem, {}, [className, cls[view]])}>
        <div className={cls.header}>
          <Skeleton width="310px" height="300px" />
        </div>
        <div className={cls.main}>
          <div className={cls.metaInfo}>
            <Skeleton width="200px" height="25px" />
            <div className={cls.views}>
              <Skeleton width="65px" height="24px" />
            </div>
          </div>
          <Skeleton width="310px" height="32px" />
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleSkeletonListItem, {}, [className, cls[view]])}>
      <div className={cls.header}>
        <div className={cls.authorAndDate}>
          <div className={cls.author}>
            <Skeleton width="40px" height="40px" borderRadius="50%" />
            <Skeleton width="150px" height="30px" />
          </div>
          <Skeleton width="120px" height="24px" />
        </div>
        <Skeleton width="50%" height="38px" />
        <Skeleton width="30%" height="24px" />
      </div>
      <div className={cls.main}>
        <Skeleton width="100%" height="241px" />
        <div className={cls.text}>
          <Skeleton width="100%" height="25px" />
          <Skeleton width="100%" height="25px" />
          <Skeleton width="70%" height="25px" />
        </div>
      </div>
      <div className={cls.footer}>
        <Skeleton width="150px" height="42px" />
        <Skeleton width="67px" height="24px" />
      </div>
    </div>
  );
});
