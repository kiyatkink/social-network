import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Text, TextThems } from 'shared/ui/Text/Text';
import { Page } from 'shared/ui/Page/Page';
import cls from './ProfilePage.module.scss'
import { getCanEdit } from '../model/selectors/getCanEdit/getCanEdit';

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const canEdit = useSelector((state) => getCanEdit(state, id));

  if (!id) {
    return (
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        <Text
          theme={TextThems.ERROR}
          text="Отсутствует id пользователя"
        />
      </div>
    );
  }

  return (
    <Page className={classNames(cls.ProfilePage, {}, [className])}>
      <EditableProfileCard profileId={id} canEdit={canEdit} />
    </Page>
  );
};

export default memo(ProfilePage)
