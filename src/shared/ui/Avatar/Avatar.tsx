import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss'

interface AvatarSize {
    width: string,
    height: string
}
interface AvatarProps {
    className?: string
    src?: string,
    alt: string
    size?: AvatarSize
}

export const Avatar: FC<AvatarProps> = memo((props: AvatarProps) => {
  const {
    className,
    src,
    alt,
    size,
  } = props
  return (
    <img
      className={classNames(cls.Avatar, {}, [className])}
      src={src || 'https://memepedia.ru/wp-content/uploads/2019/03/vinni-puh-v-kresle.jpg'}
      alt={alt}
      style={{
         width: size?.width || '100px',
         height: size?.height || '100px',
         lineHeight: size?.height || '100px',
      }}
    />
  );
});
