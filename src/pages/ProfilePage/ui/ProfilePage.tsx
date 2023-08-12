import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { EditableProfileCard } from 'features/EditableProfileCard';
import cls from './ProfilePage.module.scss'

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props
  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      <EditableProfileCard />
    </div>
  );
};

export default ProfilePage
