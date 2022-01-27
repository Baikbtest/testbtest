import { AppConfigService } from './config/config.service';
export declare class AppService {
    private readonly appconfig;
    constructor(appconfig: AppConfigService);
    getURL(): string;
    getBURL(): string;
}
