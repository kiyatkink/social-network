import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = memo((props: PageLoaderProps) => {
  const { className } = props
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Spinner />
    </div>
  );
});
