import { ConfigService } from '@nestjs/config'
const secret: string = String(
    (configService: ConfigService): string => configService.get('secret_key')
);
export const jwtConstants = {
    secret: secret,
};