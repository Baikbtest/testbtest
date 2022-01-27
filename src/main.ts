import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { AppConfigService } from './config/config.service';
import { NestExpressApplication } from '@nestjs/platform-express';

  

//dotenv.config();

async function bootstrap() {
  //const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.init();
  // Get app config for cors settings and starting the app.
  const appConfig: AppConfigService = app.get(AppConfigService);

  //const configService = app.get(this.ConfigService);
  await app.listen( appConfig.port );
}
bootstrap();
