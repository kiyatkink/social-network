import { useCallback, useEffect, useRef } from 'react';

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const callbackRef = useRef(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const result = useCallback((...args: any[]) => {
    if (!callbackRef.current) {
      callback(...args)
      callbackRef.current = true
      timeoutRef.current = setTimeout(() => {
        callbackRef.current = false
      }, delay)
    }
  }, [callback, delay])

  useEffect(() => () => {
    window.clearTimeout(timeoutRef.current)
  }, [])

  return result
}
