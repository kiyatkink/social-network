import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from 'app/router';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nextForTests';
import { render } from '@testing-library/react'
import { Routes, RoutesPath, RoutesPaths } from '../../config/routerConfig/routerConfig';

interface CustomRenderOptions {
    route?: RoutesPath,
}
export const customRender = (component: ReactNode, options: CustomRenderOptions) => {
  const { route = RoutesPaths[Routes.MAIN] } = options
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18n}>
        <AppRouter />
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  )
};
