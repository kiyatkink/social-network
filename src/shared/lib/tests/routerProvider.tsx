import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from 'app/router';

export const routerProvider = (component: ReactNode, route = '/') => (
  <MemoryRouter initialEntries={[route]}>
    <AppRouter />
    { component }
  </MemoryRouter>
);
