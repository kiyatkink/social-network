import {
  memo, ReactNode, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { routeConfig, RoutePropsWithAuth } from 'shared/config/routerConfig/routerConfig';
import { PrivateWrapper } from '../PrivateWrapper/PrivateWrapper';

export const AppRouter = memo(() => {
  const renderElement = useCallback((element: ReactNode) => (
    <Suspense fallback={<PageLoader />}>
      {element}
    </Suspense>
  ), [])

  const renderRoute = useCallback((conf: RoutePropsWithAuth) => {
    const { path, element, onlyAuth } = conf

    if (onlyAuth) {
      return (
        <Route
          path={path}
          key={path}
          element={(
            <PrivateWrapper>
              { renderElement(element) }
            </PrivateWrapper>
          )}
        />
      )
    }

    return (
      <Route
        path={path}
        key={path}
        element={renderElement(element)}
      />
    )
  }, [renderElement])

  return (
    <Routes>
      {Object.values(routeConfig).map(renderRoute)}
    </Routes>
  )
})
