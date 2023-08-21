import { getUserData } from './model/selectors/getUserData/getUserData';
import { userActions, userReducer } from './model/slice/userSlice';
import { UserSchema } from './model/types/UserSchema';
import { User } from './model/types/user'

export {
  userReducer,
  userActions,
  getUserData,
  UserSchema,
  User,
}
