import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextThems } from 'shared/ui/Text/Text'
import { AppInput } from 'shared/ui/AppInput/AppInput';
import { AppButton, AppButtonThems } from 'shared/ui/AppButton/AppButton';
import cls from './AddNewComment.module.scss'

interface AddNewCommentProps {
    className?: string
    onSendComment: () => void,
    onChangeComment: (value: string) => void,
    newComment: string
    sendIsLoading: boolean,
    error: string | undefined
}

export const AddNewComment: FC<AddNewCommentProps> = memo((props: AddNewCommentProps) => {
  const {
    className,
    onSendComment,
    onChangeComment,
    newComment,
    sendIsLoading,
    error,
  } = props

  const { t } = useTranslation()

  return (
    <div className={classNames(cls.AddNewComment, {}, [className])}>
      <div className={cls.main}>
        <AppInput
          className={cls.input}
          placeholder={t('Введите текст комментария')}
          onChange={onChangeComment}
          value={newComment}
        />
        <AppButton
          className={cls.btn}
          theme={AppButtonThems.OUTLINE}
          onClick={onSendComment}
          disabled={sendIsLoading}
        >
          {t('Отправить')}
        </AppButton>
      </div>
      <div className={cls.footer}>
        { error && <Text theme={TextThems.ERROR} text={t(error)} />}
      </div>
    </div>
  );
});
