import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Navbar.module.scss';

export interface NavbarProps {
    classesNames?: string
}
export const Navbar: FC<NavbarProps> = (props) => {
  const { classesNames } = props;
  return (
    <div className={classNames(cls.Navbar, {}, [classesNames])}>
      <div className={cls.LinkSection} />
    </div>
  );
};
