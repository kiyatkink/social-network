import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text'
import { AppLink } from 'shared/ui/AppLink/AppLink';
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
  const {
    text, avatar, username, profileId,
  } = comment
  const { t } = useTranslation('article-detail')
  return (
    <div className={classNames(cls.Comment, {}, [className])}>
      <div className={cls.header}>
        <AppLink className={cls.link} to={`/profile/${profileId}`}>
          <Avatar src={avatar} alt={t('Аватар')} size={avatarSize} />
          <Text text={username} size={TextSize.L} />
        </AppLink>
      </div>
      <div className={cls.main}>
        <Text text={text} />
      </div>
    </div>
  );
});
