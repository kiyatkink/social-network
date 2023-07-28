import { getUserData } from './model/selectors/getUserData/getUserData';
import { userActions, userReducer } from './model/slice/userSlice';
import { User, UserSchema } from './model/types/UserSchema';

export {
  userReducer,
  userActions,
  getUserData,
  UserSchema,
  User,
}
