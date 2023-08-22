import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { AppButton, AppButtonSizes, AppButtonThems } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';
import cls from './EditableProfileHeader.module.scss'

interface EditableProfileHeaderProps {
    className?: string
    editHandler: () => void,
    saveHandler?: () => void,
    cancelHandler?: () => void,
    readonly: boolean
    isLoading?: boolean
    canEdit: boolean
}

export const EditableProfileHeader: FC<EditableProfileHeaderProps> = memo((props: EditableProfileHeaderProps) => {
  const {
    className,
    cancelHandler,
    saveHandler,
    editHandler,
    readonly,
    isLoading = false,
    canEdit,
  } = props
  const { t } = useTranslation('profile')

  return (
    <div className={classNames(cls.EditableProfileHeader, {}, [className])}>
      <Text title={t('Пользователь')} />
      { canEdit && (
      <div className={cls.btn_wrap}>
        {
          readonly ? (
            <AppButton
              className={cls.btn}
              theme={AppButtonThems.OUTLINE}
              size={AppButtonSizes.L}
              onClick={editHandler}
              disabled={isLoading}
            >
              {t('Редактировать')}
            </AppButton>
            )
            : (
              <>
                <AppButton
                  className={cls.btn}
                  theme={AppButtonThems.OUTLINE_RED}
                  size={AppButtonSizes.L}
                  onClick={cancelHandler}
                >
                  {t('Отмена')}
                </AppButton>
                <AppButton
                  className={cls.btn}
                  theme={AppButtonThems.OUTLINE}
                  size={AppButtonSizes.L}
                  onClick={saveHandler}
                >
                  {t('Сохранить')}
                </AppButton>
              </>
              )
        }
      </div>
)}
    </div>
  );
});
