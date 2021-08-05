import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor() {}

  start(): void {
    this.logger.log(`The application will start here.`);
  }
}