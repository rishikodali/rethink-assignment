const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

const formatter = format.combine(
  format.json(),
  format.colorize(),
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
);

const options = {
  console: {
    level: 'info',
    handleExceptions: true,
    format: formatter,
  },
  file: {
    level: 'error',
    filename: './logs/%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    handleExceptions: true,
    format: formatter,
  },
};

const logger = createLogger({
  transports: [
    new transports.Console(options.console),
    new transports.DailyRotateFile(options.file),
  ],
  exitOnError: false,
});

module.exports = logger;
