import { render } from 'react-dom';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import 'app/styles/index.scss';
import { ThemeProvider } from 'shared/lib/theme';
import 'shared/config/i18n/i18next';
import { ErrorBoundary } from 'app/ErrorBoundary';
import { StoreProvider } from 'app/StoreProvider';

render(
  <StoreProvider>
    <BrowserRouter>
      <ThemeProvider>
        <Suspense fallback="">
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
