import { userEvent } from '@storybook/testing-library';
import { fireEvent, screen } from '@testing-library/react'
import { customRender } from 'shared/lib/tests/ customRender';
import axios from 'axios';
import LoginUserForm from './LoginUserForm';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('LoginUserForm tests', () => {
  test('input username', async () => {
    customRender(<LoginUserForm />, {});
    const usernameInput: HTMLInputElement = await screen.findByTestId(/username_input/i)
    expect(usernameInput).toBeInTheDocument()
    expect(usernameInput.value).toBe('');
    userEvent.type(usernameInput, 'test_username')
    expect(usernameInput.value).toBe('test_username')
  })
  test('input password', async () => {
    customRender(<LoginUserForm />, {});
    const passwordInput: HTMLInputElement = await screen.findByTestId(/password_input/i)
    expect(passwordInput).toBeInTheDocument()
    expect(passwordInput.value).toBe('');
    userEvent.type(passwordInput, 'test_password')
    expect(passwordInput.value).toBe('test_password')
  })
  test('button submit error', async () => {
    mockedAxios.post.mockResolvedValue(Promise.resolve({ status: 403 }))
    customRender(<LoginUserForm />, {});
    const submitBtn: HTMLButtonElement = await screen.findByTestId(/login_btn/i)
    expect(submitBtn).toBeInTheDocument()
    fireEvent.click(submitBtn)
    const errorText = await screen.findByTestId(/error_text/i)
    expect(errorText).toBeInTheDocument()
  })
  test('button submit', async () => {
    const userValue = {
      'id': '1',
      'username': 'admin',
    }
    mockedAxios.post.mockResolvedValue(Promise.resolve({ data: userValue }))
    customRender(<LoginUserForm />, {});
    const submitBtn: HTMLButtonElement = await screen.findByTestId(/login_btn/i)
    expect(submitBtn).toBeInTheDocument()
    fireEvent.click(submitBtn)
    const errorText = screen.queryByTestId(/error_text/i)
    expect(errorText).not.toBeInTheDocument()
  })
})
