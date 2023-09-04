import {
  FC, MutableRefObject, ReactNode, useMemo, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss'
import { useInfinityScroll } from '../../lib/hooks/useInfinityScroll/useInfinityScroll';

interface PageProps {
    className?: string
    children: ReactNode
    infinityScrollCallback?: () => void,
}

export const Page: FC<PageProps> = (props: PageProps) => {
  const {
    className,
    children,
    infinityScrollCallback,
    ...otherProps
  } = props
  const rootRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  const infinityScrollProps = useMemo(() => (
    {
      root: rootRef as MutableRefObject<Element>,
      target: targetRef as MutableRefObject<Element>,
      callback: infinityScrollCallback,
      rootMargin: '20px 45px',
    }
  ), [infinityScrollCallback])

  useInfinityScroll(infinityScrollProps)

  return (
    <div {...otherProps} ref={rootRef} className={classNames(cls.Page, {}, [className])}>
      { children }
      <div ref={targetRef} />
    </div>
  );
}
