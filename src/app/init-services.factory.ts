import { ConfigurationService } from './configuration.service';
import { LoggingService } from './logging.service';
export function initServicesFactory(
  configurationService: ConfigurationService,
  loggingService: LoggingService
) {
  return async () => {
    console.log('initServicesFactory - started');
    const config = await configurationService.loadConfiguration();
    loggingService.initialize(config.logging);
    console.log('initServicesFactory - completed');
  };
}
