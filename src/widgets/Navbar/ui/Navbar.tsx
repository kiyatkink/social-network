import { classNames } from 'shared/lib/classNames/classNames';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { LoginUserModal } from 'features/LoginUserModal';
import { useDispatch, useSelector } from 'react-redux';
import { AppButton, AppButtonSizes, AppButtonThems } from 'shared/ui/AppButton/AppButton';
import { getUserData, userActions } from 'entities/User';
import { useNavigate } from 'react-router-dom';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    classesNames?: string
}
export const Navbar: FC<NavbarProps> = memo((props: NavbarProps) => {
  const { classesNames } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { t } = useTranslation()
  const authData = useSelector(getUserData)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const userExit = useCallback(() => {
    dispatch(userActions.deleteUser())
    setModalIsOpen(false)
    if (window.location.pathname === '/profile') {
      navigate('/')
    }
  }, [dispatch, navigate])

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [classesNames])}>
        <div className={cls.LinkSection}>
          <AppButton
            size={AppButtonSizes.L}
            theme={AppButtonThems.INVERTED}
            onClick={userExit}
          >
            {t('Выйти')}
          </AppButton>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(cls.Navbar, {}, [classesNames])}>
      <div className={cls.LinkSection}>
        <LoginUserModal isOpen={modalIsOpen} toClose={setModalIsOpen} />
        <AppButton
          size={AppButtonSizes.L}
          theme={AppButtonThems.INVERTED}
          onClick={() => setModalIsOpen(true)}
        >
          {t('Войти')}
        </AppButton>
      </div>
    </div>
  );
});
