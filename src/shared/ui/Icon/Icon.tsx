import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss'

export const enum IconFill {
    PRIMARY = 'fill_primary',
    SECONDARY = 'fill_secondary'
}

export const enum IconStroke {
    PRIMARY = 'stroke_primary'
}
interface IconProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>,
    width?: string,
    height?: string,
    fill?: IconFill,
    stroke?: IconStroke
}

export const Icon: FC<IconProps> = memo((props: IconProps) => {
  const {
    className,
    Svg,
    fill = '',
    height,
    width,
    stroke = '',
  } = props
  return (
    <Svg
      style={{ width: width || '100px', height: height || '100px' }}
      className={classNames(cls.Icon, {}, [className, cls[fill], cls[stroke]])}
    />
  )
});
