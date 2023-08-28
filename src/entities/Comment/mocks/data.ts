import avatar from 'shared/assets/tests/storybook.jpg';
import { Comment } from '../model/types/comment';

export const CommentMock: Comment = {
  id: '1',
  text: 'comment text',
  avatar,
  username: 'some_user',
  profileId: '1',
}
