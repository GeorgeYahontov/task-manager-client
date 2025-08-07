import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    service = new LoggerService();
    jest.clearAllMocks();
  });

  it('should call console.log with prefix and show debug log', () => {
    const spy = jest.spyOn(console, 'log'); // просто следим

    service.log('test');

    const call = spy.mock.calls.find(([firstArg]) => firstArg === '[LOG] test');
    expect(call).toBeDefined();

    spy.mockRestore();
  });

  it('should call console.warn with prefix', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    service.warn('warning');
    const call = spy.mock.calls.find(([firstArg]) => firstArg === '[WARN] warning');
    expect(call).toBeDefined();
    spy.mockRestore();
  });

  it('should call console.error with prefix', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
    service.error('error');
    const call = spy.mock.calls.find(([firstArg]) => firstArg === '[ERROR] error');
    expect(call).toBeDefined();
    spy.mockRestore();
  });
});
