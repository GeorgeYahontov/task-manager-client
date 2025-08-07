export class LoggerService {
  log(message: string, ...optionalParams: unknown[]): void {
    console.log('[LoggerService.log] called with:', message, ...optionalParams);
    if (optionalParams.length) {
      console.log(`[LOG] ${message}`, ...optionalParams);
    } else {
      console.log(`[LOG] ${message}`);
    }
  }

  warn(message: string, ...optionalParams: unknown[]): void {
    console.log('[LoggerService.warn] called with:', message, ...optionalParams);
    if (optionalParams.length) {
      console.warn(`[WARN] ${message}`, ...optionalParams);
    } else {
      console.warn(`[WARN] ${message}`);
    }
  }

  error(message: string, ...optionalParams: unknown[]): void {
    console.log('[LoggerService.error] called with:', message, ...optionalParams);
    if (optionalParams.length) {
      console.error(`[ERROR] ${message}`, ...optionalParams);
    } else {
      console.error(`[ERROR] ${message}`);
    }
  }
}
