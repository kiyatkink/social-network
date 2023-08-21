import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text'
import cls from './Comment.module.scss'
import { Comment } from '../../model/types/comment'

interface CommentProps {
    className?: string,
    comment: Comment,
}

const avatarSize = {
  width: '30px',
  height: '30px',
}
export const CommentComponent: FC<CommentProps> = memo((props: CommentProps) => {
  const { className, comment } = props
  const { text, avatar, username } = comment
  const { t } = useTranslation('article-detail')
  return (
    <div className={classNames(cls.Comment, {}, [className])}>
      <div className={cls.header}>
        <Avatar src={avatar} alt={t('Аватар')} size={avatarSize} />
        <Text text={username} size={TextSize.L} />
      </div>
      <div className={cls.main}>
        <Text text={text} />
      </div>
    </div>
  );
});
