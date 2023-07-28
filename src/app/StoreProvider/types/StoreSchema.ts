import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginUserSchema } from 'features/LoginUserModal';

export interface StoreSchema {
    counter: CounterSchema
    user: UserSchema
    loginUser: LoginUserSchema
}
