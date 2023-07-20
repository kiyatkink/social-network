import React, {
  FC, ReactNode, useState, useRef, MutableRefObject, useEffect, useCallback,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss'
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    toClose?: () => void
}

export const Modal: FC<ModalProps> = (props) => {
  const {
    className, children, isOpen, toClose,
  } = props

  const [isClosing, setClosing] = useState(false);
  const [addClassOpen, setAddClassOpen] = useState(false);
  const ref: MutableRefObject<ReturnType<typeof setTimeout>> = useRef()

  const handlerClose = useCallback(() => {
    setClosing(true)
    ref.current = setTimeout(() => {
      toClose()
      setClosing(false)
      setAddClassOpen(false)
    }, 200)
  }, [toClose])
  const contentClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handlerClose()
    }
  }, [handlerClose])

  useEffect(() => {
    let timeout: null | ReturnType<typeof setTimeout>;
    if (isOpen) {
      document.addEventListener('keydown', onKeyDown);
      timeout = setTimeout(() => {
        setAddClassOpen(true)
      }, 1)
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      clearTimeout(ref.current)
      clearTimeout(timeout)
    }
  }, [isOpen, onKeyDown])

  if (!isOpen) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, { [cls.open]: addClassOpen }, [className])}>
        <div className={cls.overlay} onClick={handlerClose} role="presentation">
          <div
            role="presentation"
            className={classNames(cls.content, { [cls.close]: isClosing }, [])}
            onClick={contentClickHandler}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
