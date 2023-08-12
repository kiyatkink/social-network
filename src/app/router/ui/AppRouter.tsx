import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User';
import cls from './AppRouter.module.scss';

export const AppRouter = memo(() => {
  const isAuth = Boolean(useSelector(getUserData))
  return (
    <Routes>
      {Object.values(routeConfig)
            .map(
                (conf) => {
                  const { path, element, onlyAuth } = conf

                  if (onlyAuth && !isAuth) {
                    return null
                  }

                  return (
                    <Route
                      path={path}
                      key={path}
                      element={(
                        <Suspense fallback={<PageLoader />}>
                          <div className={cls.wrapper}>
                            {element}
                          </div>
                        </Suspense>
                      )}
                    />
                  )
                },
            )}
    </Routes>
  )
})
