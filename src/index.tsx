import { render } from 'react-dom';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import './app/styles/index.scss';
import { ThemeProvider } from './shared/lib/theme/ui/ThemeProvider';
import 'shared/config/i18n/i18next';

render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback="">
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
