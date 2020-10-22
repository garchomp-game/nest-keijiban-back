import { Body, Controller, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    // @Post('test_login')
    // testLogin(@Body() req: LoginDto): Promise<any> {
    //     return this.authService.validateUser(req.login_id, req.password);
    // } 
}
