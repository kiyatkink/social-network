import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, AppButtonThems } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';
import cls from './ErrorPage.module.scss'

interface ErrorPageProps {
    className?: string
}

export const ErrorPage: FC<ErrorPageProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()
  const reloadHandler = () => {
    window.location.reload()
  }

  return (
    <Page className={classNames(cls.ErrorPage, {}, [className])}>
      <p className={cls.Text}>{t('Что-то пошло не так')}</p>
      <AppButton
        onClick={reloadHandler}
        theme={AppButtonThems.INVERTED}
        className={cls.BtnSize}
      >
        {t('Перезагрузить страницу')}
      </AppButton>
    </Page>
  );
};
