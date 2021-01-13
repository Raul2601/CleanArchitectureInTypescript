"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const environment_1 = require("../environment");
// routes
const test_routes_1 = require("./routes/test_routes");
const common_routes_1 = require("./routes/common_routes");
const user_routes_1 = require("./routes/user_routes");
const responseTimeMiddleware_1 = require("./responseTime/responseTimeMiddleware");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://localhost/' + environment_1.default.getDBName();
        this.responseTime = new responseTimeMiddleware_1.ResponseTime();
        // routes
        this.test_routes = new test_routes_1.TestRoutes();
        this.userRoutes = new user_routes_1.UserRoutes();
        this.commonRoutes = new common_routes_1.CommonRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.test_routes.route(this.app);
        this.userRoutes.route(this.app);
        this.commonRoutes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // log response tine
        this.app.use(this.responseTime.LogResponseTime);
    }
    mongoSetup() {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    }
}
exports.default = new App().app;
