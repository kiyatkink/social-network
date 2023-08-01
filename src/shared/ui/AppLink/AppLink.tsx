import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INVERTED_PRIMARY = 'inverted_primary',
    INVERTED_SECONDARY = 'inverted_secondary'
}

export enum AppLinkSizes {
    M = 'm',
    L = 'l',
    XL = 'xl'
}
export interface AppLinkProps extends LinkProps{
    className?: string
    theme?: AppLinkTheme,
    size?: AppLinkSizes
}
export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
  const {
    className,
    theme = AppLinkTheme.PRIMARY,
    to,
    children,
    size = AppLinkSizes.M,
    ...otherProps
  } = props;

  return (
    <Link
      className={classNames(cls.Link, {}, [className, cls[theme], cls[size]])}
      to={to}
      {...otherProps}
    >
      { children }
    </Link>
  );
});
