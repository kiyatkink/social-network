import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss'

export enum TextThems {
    PRIMARY = 'primary',
    ERROR = 'error'
}
interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextThems
}

export const Text: FC<TextProps> = (props) => {
  const {
    className, title, text, theme = TextThems.PRIMARY,
  } = props
  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
      { title && <p className={cls.title}>{title}</p> }
      { text && <p className={cls.text}>{text}</p> }
    </div>
  );
};
