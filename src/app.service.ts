import { Injectable } from '@nestjs/common';
import { AppConfigService } from './config/config.service';

//import { ConfigService } from '@nestjs/config';
//import * as dotenv from 'dotenv';
import { appendFile } from 'fs';
import { Agent } from 'https';
import { catchError, map } from 'rxjs/operators';
//import { LoggerService } from './common/provider';



@Injectable()
export class AppService {
  constructor(
    private readonly appconfig: AppConfigService,
    //private readonly logger: LoggerService,
    //private httpService: HttpService,
  ) {}
  getURL(): string {
    //return this.baseURL;
    return this.appconfig.url;
    //return 'Get the Required URL from Config!';
  }
  getBURL(): string {
    //return this.baseURL;
    return this.appconfig.url;
    //return 'Get the Required URL from Config!';
  }
}
