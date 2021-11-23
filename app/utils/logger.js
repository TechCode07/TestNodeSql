const winston = require('winston');

const transports = [
    new winston.transports.File({
        'filename': 'logs/error.log',
        'level': 'error'
    }),
    new winston.transports.File({
        'filename': 'logs/combined.log',
        'level': 'debug'
    })
];

if(process.env.ENV !== 'production') {
    transports.push(new winston.transports.Console());
}

const logger = winston.createLogger({
    'level': 'info',
    'format': winston.format.json(),
    'transports': transports
});

module.exports.logger = logger;
