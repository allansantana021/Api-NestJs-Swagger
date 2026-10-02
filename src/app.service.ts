import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    const dbUrl = this.configService.get<string>('DATABASE_URL');
    const apiKey = this.configService.get<string>('API_KEY');
    const jwtSecret = this.configService.get<string>('JWT_SECRET');

    console.log('Banco:', dbUrl);
    console.log('API Key:', apiKey);
    console.log('JWT Secret:', jwtSecret);

    return 'Aplicação NestJS iniciada com Infisical!';
  }
}
