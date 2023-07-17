import { fireEvent, screen } from '@testing-library/react'
import { customRender } from 'shared/lib/tests/ customRender';
import { Routes, RoutesPaths } from 'shared/config/routerConfig/routerConfig';
import { Sidebar } from './Sidebar';

describe('Sidebar testing', () => {
  test('click to About Link', async () => {
    customRender(<Sidebar />, {});
    const linkAbout = screen.getByText(/О сайте/i)
    fireEvent.click(linkAbout)
    const AboutPage = await screen.findByTestId('about-page')
    expect(AboutPage).toBeInTheDocument()
  })
  test('click to Main Link', async () => {
    customRender(<Sidebar />, { route: RoutesPaths[Routes.ABOUT] });
    const linkMain = screen.getByText(/Главная/i)
    fireEvent.click(linkMain)
    const MainPage = await screen.findByTestId('main-page')
    expect(MainPage).toBeInTheDocument()
  })
})
