type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface ILogger {
  info(message: string): void;
  warn(message: string): void;
  debug(message: string): void;
  error(message: string): void;
}

export class Logger implements ILogger {
  constructor(private logLevel: LogLevel) {}

  info(message: string): void {
    console.log(`[INFO]: ${message}`);
  }

  warn(message: string): void {
    console.warn(`[WARN]: ${message}`);
  }

  error(message: string): void {
    console.error(`[ERROR]: ${message}`);
  }

  debug(message: string): void {
    if (this.logLevel === 'debug') {
      console.log(`[DEBUG]: ${message}`);
    }
  }

  static create(level: LogLevel): Logger {
    return new Logger(level);
  }
}

export class PrefixedLogger extends Logger {
  constructor(
    level: LogLevel,
    private readonly prefix: string
  ) {
    super(level);
  }

  override info(message: string): void {
    super.info(`${this.prefix} ${message}`);
  }

  override warn(message: string): void {
    super.warn(`${this.prefix} ${message}`);
  }

  override error(message: string): void {
    super.error(`${this.prefix} ${message}`);
  }

  override debug(message: string): void {
    super.debug(`${this.prefix} ${message}`);
  }
}
