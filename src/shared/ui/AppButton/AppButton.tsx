import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';

export enum AppButtonThems {
    CLEAR = 'clear',
    INVERTED = 'inverted',
    PRIMARY = 'primary',
    OUTLINE = 'outline'
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
    square?: boolean,
    disabled?: boolean
}
export const AppButton: FC<AppButtonProps> = (props) => {
  const {
    className,
    theme = '',
    children,
    square = false,
    size = AppButtonSizes.M,
    disabled = false,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  }

  return (
    <button
      className={
        classNames(cls.AppButton, mods, [className, cls[theme], cls[size]])
      }
      disabled={disabled}
      {...otherProps}
    >
      { children }
    </button>
  );
};
