import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getURL(): string {
    return this.appService.getURL();
  }
  @Get('getBURL')
  getBURL(): string {
    return this.appService.getURL();
  }
}
