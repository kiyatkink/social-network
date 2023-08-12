import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileCard } from 'entities/Profile';
import { useAsyncReducer } from 'shared/lib/useAsyncReducer/useAsyncReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextThems } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import cls from './EditableProfileCard.module.scss'
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileErrors } from '../../model/selectors/getProfileError/getProfileErrors';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { EditableProfileHeader } from '../EditableProfileHeader/EditableProfileHeader';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { ServerErrors, ValidationErrors } from '../../model/types/ProfileSchema';

interface EditableProfileCardProps {
    className?: string
}

export const EditableProfileCard: FC<EditableProfileCardProps> = memo((props: EditableProfileCardProps) => {
  const { className } = props
  const dispatch = useDispatch()
  const { t } = useTranslation('profile')

  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const errors = useSelector(getProfileErrors)
  const readonly = useSelector(getProfileReadonly)
  const form = useSelector(getProfileForm)

  useAsyncReducer('profile', profileReducer)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch]);

  const validateErrorTranslates = {
    [ValidationErrors.EMPTY_FIRSTNAME]: t('Поле имя не должно быть пустым'),
    [ValidationErrors.EMPTY_LASTNAME]: t('Поле фамилии не должно быть пустым'),
    [ValidationErrors.AGE_SHOULD_BE_INTEGER]: t('Поле возраст должно быть целым'),
    [ValidationErrors.AGE_SHOULD_BE_MORE_THAN_ZERO]: t('Поле возраст не должно быть равно нулю'),
    [ValidationErrors.EMPTY_CITY]: t('Поле город не должно быть пустым'),
    [ValidationErrors.EMPTY_USERNAME]: t('Поле имя пользователя не должно быть пустым'),
    [ValidationErrors.AVATAR_SHOULD_BE_URL]: t('Поле аватар должно быть ссылкой на картинку'),
    [ServerErrors.FAILED_TO_GET_DATA]: t('Не удалось загрузить данные о профиле'),
    [ServerErrors.FAILED_TO_UPDATE_DATA]: t('Не удалось сохранить данные'),
  }

  const changeFirst = useCallback((value: string) => {
    dispatch(profileActions.changeForm({ first: value }))
  }, [dispatch])

  const changeLastname = useCallback((value: string) => {
    dispatch(profileActions.changeForm({ lastname: value }))
  }, [dispatch])

  const changeAge = useCallback((value: string) => {
    if (!Number.isNaN(+value) && +value <= 100) {
      dispatch(profileActions.changeForm({ age: Number(value) }))
    }
  }, [dispatch])

  const changeCountry = useCallback((value: Country) => {
    dispatch(profileActions.changeForm({ country: value }))
  }, [dispatch])

  const changeCity = useCallback((value: string) => {
    dispatch(profileActions.changeForm({ city: value }))
  }, [dispatch])

  const changeCurrency = useCallback((value: Currency) => {
    dispatch(profileActions.changeForm({ currency: value }))
  }, [dispatch])

  const changeUsername = useCallback((value: string) => {
    dispatch(profileActions.changeForm({ username: value }))
  }, [dispatch])

  const changeAvatar = useCallback((value: string) => {
    dispatch(profileActions.changeForm({ avatar: value }))
  }, [dispatch])

  const editHandler = useCallback(() => {
    dispatch(profileActions.changeReadonly(false))
  }, [dispatch])

  const cancelHandler = useCallback(() => {
    dispatch(profileActions.changeForm(data!))
    dispatch(profileActions.changeReadonly(true))
  }, [data, dispatch])

  const saveHandler = useCallback(() => {
    dispatch(updateProfileData(form!))
  }, [dispatch, form])

  if (errors?.length === 1 && errors.includes(ServerErrors.FAILED_TO_GET_DATA)) {
    return (
      <Text
        theme={TextThems.ERROR}
        text={validateErrorTranslates[errors[0]]}
      />
    )
  }

  return (
    <div className={classNames(cls.EditableProfileCard, {}, [className])}>
      <EditableProfileHeader
        editHandler={editHandler}
        cancelHandler={cancelHandler}
        saveHandler={saveHandler}
        readonly={readonly}
        isLoading={isLoading}
      />
      <ProfileCard
        form={form}
        changeFirst={changeFirst}
        changeLastname={changeLastname}
        changeAge={changeAge}
        changeCountry={changeCountry}
        changeCity={changeCity}
        changeCurrency={changeCurrency}
        changeUsername={changeUsername}
        changeAvatar={changeAvatar}
        isLoading={isLoading}
        readonly={readonly}
      />
      {errors?.length && errors.map((err) => (
        <Text
          key={err}
          theme={TextThems.ERROR}
          text={validateErrorTranslates[err]}
        />
      ))}
    </div>
  );
});
