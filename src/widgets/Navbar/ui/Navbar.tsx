import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginUserModal } from 'features/LoginUserModal';
import cls from './Navbar.module.scss';
import { AppButton, AppButtonSizes, AppButtonThems } from '../../../shared/ui/AppButton/AppButton';

export interface NavbarProps {
    classesNames?: string
}
export const Navbar: FC<NavbarProps> = (props) => {
  const { classesNames } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { t } = useTranslation()
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
};
