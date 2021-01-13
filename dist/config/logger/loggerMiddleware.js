"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinstonLogger = void 0;
const winston = require("winston");
class WinstonLogger {
    constructor() {
        this.log = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            defaultMeta: { service: 'user-service' },
            transports: [
                new winston.transports.Console({ format: winston.format.simple() })
            ],
        });
    }
    get log() {
        return this._logger;
    }
    set log(v) {
        this._logger = v;
    }
}
exports.WinstonLogger = WinstonLogger;
