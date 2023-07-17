import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';

export enum AppButtonThems {
    CLEAR = 'clear',
    INVERTED = 'inverted',
    PRIMARY = 'primary',
}

export enum AppButtonSizes {
    M = 'm',
    L = 'l',
    XL = 'xl'
}
export interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: AppButtonThems
    size?: AppButtonSizes
    square?: boolean
}
export const AppButton: FC<AppButtonProps> = (props) => {
  const {
    className,
    theme,
    children,
    square = false,
    size = AppButtonSizes.M,
    ...otherProps
  } = props;
  return (
    <button
      className={
        classNames(cls.AppButton, { [cls.square]: square }, [className, cls[theme], cls[size]])
      }
      {...otherProps}
    >
      { children }
    </button>
  );
};
