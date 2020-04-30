const winston = require("winston");
const expressWinston = require("express-winston");
const { DateTime } = require("luxon");
const env = require("../config/env");

const { format } = winston;
const { combine, timestamp, json } = format;

const winstonDefaultOption = {
    level: env.LOG_LEVEL,
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.Console({
            timestamp: DateTime.utc().toString()
        })
    ]
};

const logger = winston.createLogger({
    ...winstonDefaultOption
});

const loggerExpress = expressWinston.logger({
    expressFormat: true,
    meta: true,
    ...winstonDefaultOption
});

module.exports = {
    logger,
    loggerExpress
};
