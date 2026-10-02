import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // disponibiliza o ConfigService em todo o projeto
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
