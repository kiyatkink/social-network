import { useCallback, useEffect, useRef } from 'react';

export function useDebounce<T extends(...args: any) => void>(callback: T, delay: number) {
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => () => {
    clearTimeout(timeout.current)
  }, [])

  return useCallback((...args: Parameters<T>) => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    timeout.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }, [callback, delay])
}
