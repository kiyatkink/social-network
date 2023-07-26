import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, AppButtonSizes, AppButtonThems } from 'shared/ui/AppButton/AppButton';
import { AppInput, AppInputSize } from 'shared/ui/AppInput/AppInput';
import { useTranslation } from 'react-i18next';
import cls from './LoginUserForm.module.scss'

interface LoginUserFormProps {
    className?: string
}

export const LoginUserForm: FC<LoginUserFormProps> = (props) => {
  const { className } = props
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.LoginUserForm, {}, [className])}>
      <AppInput
        type="text"
        placeholder={t('Логин')}
        value={login}
        onChange={setLogin}
        size={AppInputSize.L}
        autofocus
      />
      <AppInput
        type="password"
        placeholder={t('Пароль')}
        value={password}
        onChange={setPassword}
        size={AppInputSize.L}
      />
      <AppButton
        className={cls.btn}
        theme={AppButtonThems.INVERTED}
        size={AppButtonSizes.L}
      >
        {t('Войти')}
      </AppButton>
    </div>
  );
};
