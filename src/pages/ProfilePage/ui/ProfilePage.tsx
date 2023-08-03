import { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProfileData, ProfileCard, profileReducer, getProfileData, profileActions,
} from 'entities/Profile';
import { useAsyncReducer } from 'shared/lib/useAsyncReducer/useAsyncReducer';
import { getUserData } from 'entities/User';
import cls from './ProfilePage.module.scss'

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props
  const dispatch = useDispatch()
  const data = useSelector(getProfileData)
  const user = useSelector(getUserData)

  useAsyncReducer('profile', profileReducer)

  useEffect(() => {
    if (user) {
      dispatch(fetchProfileData())
    }
    if (!user) {
      dispatch(profileActions.deleteProfileData())
    }
  }, [dispatch, user]);

  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      { data && <ProfileCard firstname={data?.first} lastname={data?.lastname} />}
    </div>
  );
};

export default ProfilePage
