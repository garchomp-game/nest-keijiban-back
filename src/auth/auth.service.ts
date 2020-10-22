import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
        ) { }

    async validateUser(login_id: string, pass: string): Promise<any> {
        console.log(login_id);
        const user = await this.usersService.getLoginUser(login_id);
        if (user && compareSync(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { login_id: user.login_id, id: user.id };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}