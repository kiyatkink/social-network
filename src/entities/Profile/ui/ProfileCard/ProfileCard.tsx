import {
  FC, memo, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonSizes, AppButtonThems } from 'shared/ui/AppButton/AppButton';
import { AppInput, AppInputSize } from 'shared/ui/AppInput/AppInput';
import { useDispatch, useSelector } from 'react-redux';
import { profileActions } from 'entities/Profile';
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
    className?: string
    lastname: string,
    firstname: string
}

export const ProfileCard: FC<ProfileCardProps> = memo((props: ProfileCardProps) => {
  const { className, lastname, firstname } = props
  const { t } = useTranslation('profile')
  const [isDisable, setDisable] = useState(true)
  const dispatch = useDispatch()

  const editData = useCallback(() => {
    setDisable((prev) => !prev)
  }, [])

  const onChangeFirstname = useCallback((value: string) => {
    dispatch(profileActions.changeFirstName(value))
  }, [dispatch])

  const onChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.changeLastName(value))
  }, [dispatch])

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Пользователь')} />
        <AppButton
          className={cls.btn}
          size={AppButtonSizes.L}
          theme={AppButtonThems.OUTLINE}
          onClick={editData}
        >
          {t('Редактировать')}
        </AppButton>
      </div>
      <div className={cls.main}>
        <AppInput
          onChange={onChangeFirstname}
          disabled={isDisable}
          size={AppInputSize.L}
          value={firstname}
          placeholder={t('Имя')}
        />
        <AppInput
          onChange={onChangeLastname}
          disabled={isDisable}
          size={AppInputSize.L}
          value={lastname}
          placeholder={t('Фамилия')}
        />
      </div>
    </div>
  );
});
