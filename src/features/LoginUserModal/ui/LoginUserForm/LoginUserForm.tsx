import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, AppButtonSizes, AppButtonThems } from 'shared/ui/AppButton/AppButton';
import { AppInput, AppInputSize } from 'shared/ui/AppInput/AppInput';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextThems } from 'shared/ui/Text/Text';
import { useAsyncReducer } from 'shared/lib/useAsyncReducer/useAsyncReducer';
import cls from './LoginUserForm.module.scss'
import { getLoginUser } from '../../model/selectors/getLoginUser/getLoginUser';
import { LoginUserActions, LoginUserReducer } from '../../model/slice/LoginUserSlice';
import { loginByUsernameAndPassword } from '../../model/services/loginByUsernameAndPassword/loginByUsernameAndPassword';

interface LoginUserFormProps {
    className?: string
}

const LoginUserForm: FC<LoginUserFormProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()

  useAsyncReducer('loginUser', LoginUserReducer)

  const {
    username, password, isLoading, error,
  } = useSelector(getLoginUser)

  const setUsername = useCallback((newValue: string) => {
    dispatch(LoginUserActions.setUsername(newValue))
  }, [dispatch])

  const setPassword = useCallback((newValue: string) => {
    dispatch(LoginUserActions.setPassword(newValue))
  }, [dispatch])

  const sendData = useCallback(() => {
    dispatch(loginByUsernameAndPassword({ username, password }))
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.LoginUserForm, {}, [className])}>
      <AppInput
        data-testid="username_input"
        type="text"
        placeholder={t('Логин')}
        value={username}
        onChange={setUsername}
        size={AppInputSize.L}
        autofocus
      />
      <AppInput
        data-testid="password_input"
        type="password"
        placeholder={t('Пароль')}
        value={password}
        onChange={setPassword}
        size={AppInputSize.L}
      />
      { error && <Text data-testid="error_text" text={t('Пользователь не найден')} theme={TextThems.ERROR} /> }
      <AppButton
        data-testid="login_btn"
        className={cls.btn}
        theme={AppButtonThems.OUTLINE}
        size={AppButtonSizes.L}
        disabled={isLoading}
        onClick={sendData}
      >
        {t('Войти')}
      </AppButton>
    </div>
  );
};

export default LoginUserForm
