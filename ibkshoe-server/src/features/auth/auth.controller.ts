import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from 'src/dto/auth.dto';
import { NoFilesInterceptor } from '@nestjs/platform-express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    @UseInterceptors(NoFilesInterceptor())
    async createUser(@Body() createAuthDto: CreateAuthDto) {
        return await this.authService.createUser(createAuthDto);
    }
}
