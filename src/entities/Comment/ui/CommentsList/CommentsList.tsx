import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentsList.module.scss'
import { CommentComponent } from '../Comment/Comment'
import { Comment } from '../../model/types/comment'

interface CommentsListProps {
    className?: string,
    comments: Comment[],
}

export const CommentsList: FC<CommentsListProps> = memo((props: CommentsListProps) => {
  const { className, comments } = props
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      { comments.map((comment) => <CommentComponent key={comment.id} comment={comment} />) }
    </div>
  );
});
