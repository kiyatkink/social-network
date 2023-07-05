import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INVERTED_PRIMARY = 'inverted_primary',
    INVERTED_SECONDARY = 'inverted_secondary'
}
export interface AppLinkProps extends LinkProps{
    className?: string
    theme?: AppLinkTheme
}
export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    theme = AppLinkTheme.PRIMARY,
    to,
    children,
    ...otherProps
  } = props;

  return (
    <Link className={classNames(cls.Link, {}, [className, cls[theme]])} to={to} {...otherProps}>
      { children }
    </Link>
  );
};
