import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useEffect, useState } from 'react';
import { AUTH_DATA_USER } from 'shared/consts/localstorage';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { AppRouter } from './router';

export function App() {
  const dispatch = useDispatch()
  const [init, setInit] = useState(false)
  useEffect(() => {
    const user = localStorage.getItem(AUTH_DATA_USER)
    if (user) {
      dispatch(userActions.setUser(JSON.parse(user)))
    }
    setInit(true)
  }, [dispatch]);
  return (
    <div className={classNames('app', {}, [])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        { init && <AppRouter />}
      </div>
    </div>
  );
}
