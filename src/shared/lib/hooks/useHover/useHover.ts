import { useCallback, useMemo, useState } from 'react';

interface EnterAndLeaveEvents {
    onMouseEnter: () => void,
    onMouseLeave: () => void,
}

type UseHoverReturn = [isHover: boolean, hoverEvents: EnterAndLeaveEvents]
export function useHover(): UseHoverReturn {
  const [isHover, setIsHover] = useState(false)

  const onMouseEnter = useCallback(() => {
    setIsHover(true)
  }, [])

  const onMouseLeave = useCallback(() => {
    setIsHover(false)
  }, [])

  return useMemo(() => [
    isHover,
    { onMouseEnter, onMouseLeave } as EnterAndLeaveEvents,
  ], [isHover, onMouseEnter, onMouseLeave])
}
