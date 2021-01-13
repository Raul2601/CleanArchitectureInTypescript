import * as winston from 'winston'

export class WinstonLogger {

    private _logger: winston.Logger;
    public get log(): winston.Logger {
        return this._logger;
    }
    public set log(v: winston.Logger) {
        this._logger = v;
    }


    constructor() {
        this.log = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            defaultMeta: { service: 'user-service' },
            transports: [
                new winston.transports.Console({ format: winston.format.simple() })
            ],
        })
    }



}