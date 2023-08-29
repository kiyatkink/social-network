import { FC, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppInput, AppInputSize } from 'shared/ui/AppInput/AppInput';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './ProfileCard.module.scss'
import { ProfileData } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string,
    form: ProfileData | undefined,
    isLoading: boolean,
    changeFirst: (value: string) => void
    changeLastname: (value: string) => void
    changeAge: (value: string) => void,
    changeCountry: (value: Country) => void,
    changeCity: (value: string) => void,
    changeCurrency: (value: Currency) => void,
    changeUsername: (value: string) => void,
    changeAvatar: (value: string) => void,
    readonly: boolean
}

export const ProfileCard: FC<ProfileCardProps> = memo((props: ProfileCardProps) => {
  const {
    className,
    form,
    isLoading,
    changeFirst,
    changeLastname,
    changeAge,
    changeCountry,
    changeCity,
    changeCurrency,
    changeUsername,
    changeAvatar,
    readonly,
  } = props
  const { t } = useTranslation('profile')

  const avatarSize = useMemo(() => ({
    width: '200px',
    height: '200px',
  }), [])

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className])}>
        <div className={cls.spinner_wrapper}>
          <Spinner />
        </div>
      </div>
    )
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.avatar_wrapper}>
        <Avatar
          src={form?.avatar}
          alt={t('Аватар')}
          size={avatarSize}
        />
      </div>
      <AppInput
        onChange={changeFirst}
        readOnly={readonly}
        size={AppInputSize.L}
        value={form?.first}
        placeholder={t('Имя')}
      />
      <AppInput
        onChange={changeLastname}
        readOnly={readonly}
        size={AppInputSize.L}
        value={form?.lastname}
        placeholder={t('Фамилия')}
      />
      <AppInput
        onChange={changeAge}
        readOnly={readonly}
        size={AppInputSize.L}
        value={form?.age}
        placeholder={t('Возраст')}
      />
      <CountrySelect
        readonly={readonly}
        value={form?.country}
        onChange={changeCountry}
      />
      <AppInput
        onChange={changeCity}
        readOnly={readonly}
        size={AppInputSize.L}
        value={form?.city}
        placeholder={t('Город')}
      />
      <CurrencySelect
        readonly={readonly}
        value={form?.currency}
        onChange={changeCurrency}
      />
      <AppInput
        onChange={changeUsername}
        readOnly={readonly}
        size={AppInputSize.L}
        value={form?.username}
        placeholder={t('Имя пользователя')}
      />
      <AppInput
        onChange={changeAvatar}
        readOnly={readonly}
        size={AppInputSize.L}
        value={form?.avatar}
        placeholder={t('Аватар')}
      />
    </div>
  );
});
