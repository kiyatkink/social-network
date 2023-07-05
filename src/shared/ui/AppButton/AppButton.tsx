import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';

export enum AppButtonThems {
    CLEAR = 'clear'
}
export interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: AppButtonThems
}
export const AppButton: FC<AppButtonProps> = (props) => {
  const {
    className, theme, children, ...otherProps
  } = props;
  return (
    <button className={classNames(cls.AppButton, {}, [className, cls[theme]])} {...otherProps}>
      { children }
    </button>
  );
};
