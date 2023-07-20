import { screen } from '@testing-library/react'
import { customRender } from 'shared/lib/tests/ customRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter testing', () => {
  test('Counter render', async () => {
    customRender(<Counter />, { initialStore: { counter: { value: 10 } } });
    const CounterValue = await screen.getByTestId('counter')
    expect(CounterValue).toHaveTextContent('10');
  })
  test('click to increment', async () => {
    customRender(<Counter />, { initialStore: { counter: { value: 10 } } });
    const BtnIncrement = await screen.getByTestId('increment-btn')
    userEvent.click(BtnIncrement)
    const CounterValue = await screen.getByTestId('counter')
    expect(CounterValue).toHaveTextContent('11');
  })
  test('click to decrement', async () => {
    customRender(<Counter />, { initialStore: { counter: { value: 10 } } });
    const BtnDecrement = await screen.getByTestId('decrement-btn')
    userEvent.click(BtnDecrement)
    const CounterValue = await screen.getByTestId('counter')
    expect(CounterValue).toHaveTextContent('9');
  })
})
