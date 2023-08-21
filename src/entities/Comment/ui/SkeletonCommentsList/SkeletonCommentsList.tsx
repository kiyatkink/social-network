import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './SkeletonCommentsList.module.scss'

interface SkeletonCommentsListProps {
    className?: string
    numberOfComments: number
}

export const SkeletonCommentsList: FC<SkeletonCommentsListProps> = memo((props: SkeletonCommentsListProps) => {
  const { className, numberOfComments = 0 } = props
  return (
    <div className={classNames(cls.SkeletonCommentsList, {}, [className])}>
      {[...Array(numberOfComments)].map(
          (e, i) => (
              // eslint-disable-next-line react/no-array-index-key
            <div className={cls.comment} key={i}>
              <div className={cls.header}>
                <Skeleton width="30px" height="30px" borderRadius="50%" />
                <Skeleton width="100px" height="20px" />
              </div>
              <div className={cls.main}>
                <Skeleton width="100%" height="16px" />
              </div>
            </div>
          ),
      )}
    </div>
  );
});
