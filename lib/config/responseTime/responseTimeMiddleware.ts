import { Request, Response, NextFunction } from "express";

export class ResponseTime {


    LogResponseTime(req: Request, res: Response, next: NextFunction) {
        const startHrTime = process.hrtime();

        var finishFunction = function () {
            const elapsedHrTime = process.hrtime(startHrTime);
            const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
            console.log("%s : %fms", req.path, elapsedTimeInMs);

            this.test = 2;

            if (elapsedTimeInMs > 500) {
                console.log("%s : %fms", req.path, elapsedTimeInMs);
            }
        };

        res.on("finish", finishFunction);

        next();
    }
}