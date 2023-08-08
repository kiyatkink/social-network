import MockAdapter from 'axios-mock-adapter'
import {
  ReactElement, ReactNode, useEffect, useRef,
} from 'react'
import { AxiosInstance } from 'axios';

type AxiosMockProps = {
    children: ReactNode
    mock: (adapter: MockAdapter) => void
    api: AxiosInstance
}

export function AxiosMock(props: AxiosMockProps): ReactElement {
  const { children, mock, api } = props
  const mockAdapter = useRef(new MockAdapter(api)).current
  mock(mockAdapter)

  useEffect(() => () => {
    mockAdapter.restore()
  }, [mockAdapter])

  return <>{children}</>
}
