import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss'

export enum TextThems {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    LEFT = 'text_left',
    CENTER = 'text_center',
    RIGHT = 'text_right',
    JUSTIFY = 'text_justify',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}
interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextThems,
    textAlign?: TextAlign,
    size?: TextSize
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextThems.PRIMARY,
    textAlign = TextAlign.LEFT,
    size = TextSize.M,
    ...otherProps
  } = props
  return (
    <div className={classNames(cls.Text, {}, [className, cls[theme], cls[textAlign], cls[size]])} {...otherProps}>
      { title && <p className={cls.title}>{title}</p> }
      { text && <p className={cls.text}>{text}</p> }
    </div>
  );
});
