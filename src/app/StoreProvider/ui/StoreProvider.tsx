import { DeepPartial } from '@reduxjs/toolkit';
import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux'
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
  const store = createReduxStore(initialStore as StoreSchema);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
