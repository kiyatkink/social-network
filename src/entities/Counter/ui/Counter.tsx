import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: FC = (props) => {
  const count = useSelector(getCounterValue)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="counter">{count}</h1>
      <AppButton data-testid="increment-btn" onClick={increment}>+</AppButton>
      <AppButton data-testid="decrement-btn" onClick={decrement}>-</AppButton>
    </div>
  )
};
