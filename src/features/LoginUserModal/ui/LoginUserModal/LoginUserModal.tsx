import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginUserForm } from '../LoginUserForm/LoginUserForm';
import cls from './LoginUserModal.module.scss'

interface LoginUserModalProps {
    className?: string
    isOpen: boolean,
    toClose: (newState: boolean) => void
}

const LoginUserModal: FC<LoginUserModalProps> = (props) => {
  const { className, isOpen, toClose } = props
  return (
    <Modal
      className={classNames(cls.LoginUserModal, {}, [className])}
      isOpen={isOpen}
      toClose={toClose}
    >
      <LoginUserForm />
    </Modal>
  );
};

export default LoginUserModal
