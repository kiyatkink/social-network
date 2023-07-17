import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';
import cls from './AppRouter.module.scss';

export function AppRouter() {
  return (
    <Routes>
      {Object.values(routeConfig)
            .map(
                ({ path, element }) => (
                  <Route
                    path={path}
                    key={path}
                    element={(
                      <Suspense fallback={<PageLoader />}>
                        <div className={cls.wrapper}>
                          { element }
                        </div>
                      </Suspense>
                        )}
                  />
                ),
            )}
    </Routes>
  );
}
