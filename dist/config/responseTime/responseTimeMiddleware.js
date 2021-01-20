"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseTime = void 0;
class ResponseTime {
    LogResponseTime(req, res, next) {
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
exports.ResponseTime = ResponseTime;
