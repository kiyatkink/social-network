import { useTheme } from 'shared/lib/theme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { ErrorBoundary } from './ErrorBoundary';
import { AppRouter } from './router';

export function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <ErrorBoundary>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </ErrorBoundary>
    </div>
  );
}
