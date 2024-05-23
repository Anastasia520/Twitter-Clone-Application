import { UserSchema } from 'entities/Client';
import { CounterSchema } from 'entities/Counter';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginSchema
}
