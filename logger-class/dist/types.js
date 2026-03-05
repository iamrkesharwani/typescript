export class Logger {
    logLevel;
    constructor(logLevel) {
        this.logLevel = logLevel;
    }
    info(message) {
        console.log(`[INFO]: ${message}`);
    }
    warn(message) {
        console.warn(`[WARN]: ${message}`);
    }
    error(message) {
        console.error(`[ERROR]: ${message}`);
    }
    debug(message) {
        if (this.logLevel === 'debug') {
            console.log(`[DEBUG]: ${message}`);
        }
    }
    static create(level) {
        return new Logger(level);
    }
}
export class PrefixedLogger extends Logger {
    prefix;
    constructor(level, prefix) {
        super(level);
        this.prefix = prefix;
    }
    info(message) {
        super.info(`${this.prefix} ${message}`);
    }
    warn(message) {
        super.warn(`${this.prefix} ${message}`);
    }
    error(message) {
        super.error(`${this.prefix} ${message}`);
    }
    debug(message) {
        super.debug(`${this.prefix} ${message}`);
    }
}
