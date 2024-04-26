import { Document } from 'mongoose';

export interface User extends Document {
  readonly fullname: string;
  readonly birthday: Date;
  readonly email: string;
  readonly password: string;
  readonly gender: string;
}
