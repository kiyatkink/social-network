import { FC, memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAsyncReducer } from 'shared/lib/useAsyncReducer/useAsyncReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextThems } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next';
import { AppInput } from 'shared/ui/AppInput/AppInput';
import { AppButton, AppButtonThems } from 'shared/ui/AppButton/AppButton';
import { newCommentActions, newCommentReducer } from '../../model/slice/newCommentSlice';
import cls from './AddNewComment.module.scss'
import { getNewCommentText } from '../../model/selectors/getNewCommentText/getNewCommentText';
import { getNewCommentIsLoading } from '../../model/selectors/getNewCommentIsLoading/getNewCommentIsLoading';
import { getNewCommentError } from '../../model/selectors/getNewCommentError/getNewCommentError';

interface AddNewCommentProps {
    className?: string
    sendNewComment: (newComment: string) => () => void
}

export const AddNewComment: FC<AddNewCommentProps> = memo((props: AddNewCommentProps) => {
  const { className, sendNewComment } = props

  useAsyncReducer('newComment', newCommentReducer)

  const newComment = useSelector(getNewCommentText)
  const isLoading = useSelector(getNewCommentIsLoading)
  const error = useSelector(getNewCommentError)

  const dispatch = useDispatch()
  const { t } = useTranslation()

  const onChangeInputNewComment = useCallback((value: string) => {
    dispatch(newCommentActions.changeError(''))
    dispatch(newCommentActions.changeText(value))
  }, [dispatch])

  return (
    <div className={classNames(cls.AddNewComment, {}, [className])}>
      <div className={cls.main}>
        <AppInput
          className={cls.input}
          placeholder={t('Введите текст комментария')}
          onChange={onChangeInputNewComment}
          value={newComment}
        />
        <AppButton
          className={cls.btn}
          theme={AppButtonThems.OUTLINE}
          onClick={sendNewComment(newComment)}
          disabled={isLoading}
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
