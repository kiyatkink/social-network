import React, { FC, InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppInput.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'>

export enum AppInputSize {
  'M'='m',
  'L' = 'l',
  'XL' = 'xl'
}
export interface AppInputProps extends HTMLInputProps{
    className?: string,
    type?: string,
    placeholder?: string,
    value?: string,
    onChange?: (value: string) => void,
    autofocus?: boolean,
    size?: AppInputSize,
}

export const AppInput: FC<AppInputProps> = memo((props: AppInputProps) => {
  const {
    className,
    type = 'text',
    placeholder,
    onChange,
    value = '',
    autofocus = false,
    size = AppInputSize.M,
    ...otherProps
  } = props

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }

  return (
    <div className={classNames(cls.AppInput, {}, [className, cls[size]])}>
      { placeholder && (
      <div className={cls.placeholder}>
        {`${placeholder}/>`}
      </div>
        )}
      <div className={cls.input_wrapper}>
        <input
          type={type}
          className={cls.input}
          onChange={inputChange}
          {...otherProps}
          autoFocus={autofocus}
        />
      </div>
    </div>
  );
})
