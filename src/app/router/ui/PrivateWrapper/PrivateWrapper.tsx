import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from 'entities/User';
import { Navigate } from 'react-router-dom';
import { RoutesPaths } from 'shared/config/routerConfig/routerConfig';

interface PrivateWrapperProps {
    children?: ReactNode
}

export const PrivateWrapper: FC<PrivateWrapperProps> = (props) => {
  const { children } = props
  const isAuth = Boolean(useSelector(getUserData))

  if (!isAuth) {
    return <Navigate to={RoutesPaths.main} replace />
  }

  return <>{ children }</>
};
