import { Connection } from 'mongoose';
import { UserSchema } from 'src/schemas/users.schema';

export const usersProvider = [
    {
        provide : 'USER_MODEL',
        useFactory : (connection: Connection) => connection.model('User', UserSchema),
        inject : ['DATABASE_CONNECTION']
    }
];