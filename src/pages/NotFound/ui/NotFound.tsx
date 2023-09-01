import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import cls from './NotFound.module.scss'

interface NotFoundProps {
    className?: string
}
export const NotFound: FC<NotFoundProps> = (props) => {
  const { className } = props
  const { t } = useTranslation();
  return (
    <Page className={classNames(cls.NotFound, {}, [className])}>
      {t('Страница не найдена')}
    </Page>
  );
};
