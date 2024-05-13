import { UserSchema } from 'entities/Client';
import { CounterSchema } from 'entities/Counter';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
