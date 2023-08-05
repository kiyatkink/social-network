import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18nextForTests';
import { render } from '@testing-library/react'
import { StoreProvider, StoreSchema } from 'app/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { Routes, RoutesPath, RoutesPaths } from '../../config/routerConfig/routerConfig';

interface CustomRenderOptions {
    route?: RoutesPath,
    initialStore?: DeepPartial<StoreSchema>
}
export const customRender = (component: ReactNode, options: CustomRenderOptions) => {
  const {
    route = RoutesPaths[Routes.MAIN],
    initialStore,
  } = options
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialStore={initialStore}>
        <I18nextProvider i18n={i18n}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  )
};
