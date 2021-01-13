import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import environment from "../environment";

// routes
import { TestRoutes } from "./routes/test_routes";
import { CommonRoutes } from "./routes/common_routes";
import { UserRoutes } from "./routes/user_routes";
import { ResponseTime } from "./responseTime/responseTimeMiddleware";

class App {
    public app: express.Application;
    public mongoUrl: string = 'mongodb://localhost/' + environment.getDBName();

    private responseTime: ResponseTime = new ResponseTime();
    // routes
    private test_routes: TestRoutes = new TestRoutes();
    private userRoutes: UserRoutes = new UserRoutes();
    private commonRoutes: CommonRoutes = new CommonRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.test_routes.route(this.app);
        this.userRoutes.route(this.app);
        this.commonRoutes.route(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // log response tine
        this.app.use(this.responseTime.LogResponseTime);
    }

    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    }
}
export default new App().app;