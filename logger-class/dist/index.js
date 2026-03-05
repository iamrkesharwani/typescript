import { Logger, PrefixedLogger } from './types.js';
const logger = Logger.create('debug');
logger.info('Server started');
logger.warn('Memory usage high');
logger.error('Database connection failed');
logger.debug('Debugging mode active');
const apiLogger = new PrefixedLogger('debug', '[API]');
apiLogger.info('Request received');
apiLogger.error('Endpoint failed');
