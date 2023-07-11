import { render, screen } from '@testing-library/react'
import { translationProvider } from 'shared/lib/tests/translationProvider';
import { Sidebar } from './Sidebar';

describe('Sidebar testing', () => {
  test('render Sidebar', () => {
    render(translationProvider(<Sidebar />));
    const buttonToggle = screen.getByText(/Тогл/i);
    expect(buttonToggle).toBeInTheDocument()
  })
})
