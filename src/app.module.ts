import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/config.module';
import * as dotenv from 'dotenv';


dotenv.config();

@Module({
  imports: [AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
