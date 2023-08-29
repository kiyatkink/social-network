import { FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { useAsyncReducer } from '../../../../shared/lib/useAsyncReducer/useAsyncReducer';
import { Text, TextThems } from '../../../../shared/ui/Text/Text'
import { AppInput } from '../../../../shared/ui/AppInput/AppInput';
import { AppButton, AppButtonThems } from '../../../../shared/ui/AppButton/AppButton';
import { newCommentActions, newCommentReducer } from '../../model/slice/newCommentSlice';
import cls from './AddNewComment.module.scss'
import { getNewCommentText } from '../../model/selectors/getNewCommentText/getNewCommentText';
import { getNewCommentIsLoading } from '../../model/selectors/getNewCommentIsLoading/getNewCommentIsLoading';
import { getNewCommentError } from '../../model/selectors/getNewCommentError/getNewCommentError';
import { sendNewComment } from '../../model/services/sendNewComment/sendNewComment';
import { SenderFnType } from '../../model/types/newComment';

interface AddNewCommentProps {
    className?: string
    newCommentSender: SenderFnType
}

export const AddNewComment: FC<AddNewCommentProps> = memo((props: AddNewCommentProps) => {
  const { className, newCommentSender } = props

  useAsyncReducer('newComment', newCommentReducer)

  const newComment = useSelector(getNewCommentText)
  const isLoading = useSelector(getNewCommentIsLoading)
  const error = useSelector(getNewCommentError)

  const dispatch = useDispatch()
  const { t } = useTranslation()

  const onChangeInputNewComment = useCallback((value: string) => {
    dispatch(newCommentActions.changeText(value))
  }, [dispatch])

  const onSendNewComment = useCallback(() => {
    dispatch(sendNewComment(newCommentSender))
  }, [dispatch, newCommentSender])

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
          onClick={onSendNewComment}
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
