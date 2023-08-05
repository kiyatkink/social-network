import { DeepPartial } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
import { StoreSchema } from '../types/StoreSchema';

interface StoreProviderProps {
    children: ReactNode,
    initialStore?: DeepPartial<StoreSchema>
}
export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const {
    children,
    initialStore,
  } = props
  const navigate = useNavigate()
  const store = createReduxStore(initialStore as StoreSchema, navigate);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
