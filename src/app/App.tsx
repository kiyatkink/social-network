import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useEffect } from 'react';
import { AUTH_DATA_USER } from 'shared/consts/localstorage';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { AppRouter } from './router';

export function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const user = localStorage.getItem(AUTH_DATA_USER)
    if (user) {
      dispatch(userActions.setUser(JSON.parse(user)))
    }
  }, [dispatch]);
  return (
    <div className={classNames('app', {}, [])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}
