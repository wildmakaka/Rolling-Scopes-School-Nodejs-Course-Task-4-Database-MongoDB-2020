const winston = require('winston');

require('winston-daily-rotate-file');

const timezoned = () =>
  new Date().toLocaleString('en-US', {
    timeZone: 'Europe/Moscow',
  });

// options for logger object
const options = {
  fileError: {
    level: 'error',
    filename: `${__dirname}/../logs/error.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 1,
  },
  fileInfo: {
    level: 'info',
    filename: `${__dirname}/../logs/access.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 1,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// logger object with above defined options
const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.fileError),
    new winston.transports.File(options.fileInfo),
    new winston.transports.Console(options.console),
  ],
  format: winston.format.combine(
    winston.format.simple(),
    winston.format.timestamp({
      format: timezoned,
    }),
    winston.format.printf(
      (res) => `[${res.timestamp}] ${res.level}: ${res.message}`
    )
  ),
  exitOnError: false,
});

const writeAccessLog = (req) => {
  logger.info('----------------------------');
  logger.info(`method = ${JSON.stringify(req.method)}`);
  logger.info(`url = ${JSON.stringify(req.originalUrl)}`);
  logger.info(`body = ${JSON.stringify(req.body)}`);
  logger.info(`query = ${JSON.stringify(req.query)}`);
  logger.info('----------------------------');
};

const writeErrorLog = (err, req) => {
  console.log('---------------------------');
  console.log('WRITE ERROR LOG');
  console.log('---------------------------');

  logger.error('----------------------------');
  logger.error(`error = ${JSON.stringify(err)}`);
  logger.error(`method = ${JSON.stringify(req.method)}`);
  logger.error(`statusCode = ${JSON.stringify(err.statusCode)}`);
  logger.error(`params = ${JSON.stringify(req.params)}`);
  logger.error(`url = ${JSON.stringify(req.originalUrl)}`);
  logger.error(`body = ${JSON.stringify(req.body)}`);
  logger.error(`query = ${JSON.stringify(req.query)}`);
  logger.error(`stack = ${JSON.stringify(err.stack)}`);
  logger.error('----------------------------');
};

process.on('unhandledRejection', (error) => {
  logger.error('----------------------------');
  logger.error('CRITICAL - UNHANDLED REJECTION!');
  logger.error('----------------------------');
  logger.error(error.stack);
});

process.on('uncaughtException', (error) => {
  logger.error('----------------------------');
  logger.error('CRITICAL - UNCOUGHT EXCEPTION!');
  logger.error('----------------------------');
  logger.error(error.stack);
});

module.exports = { writeAccessLog, writeErrorLog };
