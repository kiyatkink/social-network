import { fireEvent, render, screen } from '@testing-library/react'
import { translationProvider } from 'shared/lib/tests/translationProvider';
import { routerProvider } from 'shared/lib/tests/routerProvider';
import { Navbar } from './Navbar';

describe('Navbar testing', () => {
  test('click to About Link', async () => {
    render(routerProvider(translationProvider(<Navbar />)))
    const linkAbout = screen.getByText(/О сайте/i)
    fireEvent.click(linkAbout)
    const AboutPage = await screen.findByTestId('about-page')
    expect(AboutPage).toBeInTheDocument()
  })

  test('click to Main Link', async () => {
    render(routerProvider(translationProvider(<Navbar />), '/about'))
    const linkMain = screen.getByText(/Главная/i)
    fireEvent.click(linkMain)
    const MainPage = await screen.findByTestId('main-page')
    expect(MainPage).toBeInTheDocument()
  })
})
