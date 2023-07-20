import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
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
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Modal isOpen={modalIsOpen} toClose={setModalIsOpen}>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
          A alias consequuntur inventore nemo obcaecati, omnis quibusdam quo ullam vitae voluptas.
        </Modal>
        <AppButton
          size={AppButtonSizes.M}
          theme={AppButtonThems.INVERTED}
          onClick={() => setModalIsOpen(true)}
        >
          {t('Войти')}
        </AppButton>
      </div>
    </div>
  );
};
