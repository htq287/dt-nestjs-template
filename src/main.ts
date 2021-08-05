import { NestFactory } from '@nestjs/core';
import {Logger} from "@nestjs/common";
import { AppModule } from './app/app.module';
import { AppService } from './app/app.service';
import { AppController } from './app/app.controller';

async function bootstrap() {
  const logger = new Logger('main');

  const app = await NestFactory.create(AppModule);
  const appService = app.get(AppService);

  appService.start();
  
  const port = parseInt(process.env.PORT || '3000');
  await app.listen(port, 'localhost');
  logger.log(`Application is runing on: ${await app.getUrl()}`);
}

bootstrap().then();