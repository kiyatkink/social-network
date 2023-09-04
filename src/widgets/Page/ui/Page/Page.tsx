import React, {
  FC, MutableRefObject, ReactNode, useEffect, useMemo, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useThrottle } from 'shared/lib/hooks/useTrottle/useThrottle';
import { StoreSchema } from 'app/StoreProvider';
import cls from './Page.module.scss'
import { pageActions } from '../../model/slice/pageSlice';
import { getPageScrollValue } from '../../model/selectors/pageSelectors/pageSelectors';

interface PageProps {
    className?: string
    children: ReactNode
    infinityScrollCallback?: () => void,
    disableSaveScroll?: boolean
}

export const Page: FC<PageProps> = (props: PageProps) => {
  const {
    className,
    children,
    infinityScrollCallback,
    disableSaveScroll = false,
    ...otherProps
  } = props
  const rootRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  const targetRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const scrollValue = useSelector((store: StoreSchema) => getPageScrollValue(store, pathname))

  const infinityScrollProps = useMemo(() => (
    {
      root: rootRef as MutableRefObject<Element>,
      target: targetRef as MutableRefObject<Element>,
      callback: infinityScrollCallback,
      rootMargin: '20px 45px',
    }
  ), [infinityScrollCallback])
  useInfinityScroll(infinityScrollProps)

  const saveScroll = useThrottle((e: React.UIEvent<HTMLDivElement>) => {
    if (!disableSaveScroll) {
      dispatch(pageActions.setScrollForPath({ path: pathname, scrollTo: e.currentTarget.scrollTop }));
    }
  }, 500)

  useEffect(() => {
    rootRef.current.scrollTop = scrollValue
  }, [scrollValue])

  return (
    <div onScroll={saveScroll} {...otherProps} ref={rootRef} className={classNames(cls.Page, {}, [className])}>
      { children }
      <div ref={targetRef} />
    </div>
  );
}
