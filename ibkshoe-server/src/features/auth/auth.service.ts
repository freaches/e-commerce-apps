import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAuthDto, LoginDto } from 'src/dto/auth.dto';
import { User } from 'src/schemas/users.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel : Model<User>){}

    async createUser(createAuthDto: CreateAuthDto): Promise<User> {
        const password = await bcrypt.hash(createAuthDto.password, 10)
        
        const newUser = new this.userModel({
            fullname : createAuthDto.fullName,
            password,
            email : createAuthDto.email
        });
        
        return newUser.save();
    }

    async login(loginDto: LoginDto): Promise<User> {
        const newUser = new this.userModel(loginDto);
        return newUser.save();
    }
}
