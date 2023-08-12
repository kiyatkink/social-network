import { render, screen } from '@testing-library/react'
import { AppButton, AppButtonThems } from './AppButton';

describe('AppButton testing', () => {
  test('render AppButton', () => {
    render(<AppButton>Hello</AppButton>)
    const buttonElement = screen.getByText(/hello/i);
    expect(buttonElement).toBeInTheDocument()
  })
  test('check theme class', () => {
    render(<AppButton theme={AppButtonThems.OUTLINE}>Hello</AppButton>)
    const buttonElement = screen.getByText(/hello/i);
    expect(buttonElement).toHaveClass(AppButtonThems.OUTLINE)
  })
})
