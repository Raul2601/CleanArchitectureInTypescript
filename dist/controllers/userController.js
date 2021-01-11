"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const BaseController_1 = require("./interfaces/base/BaseController");
const UserBusiness_1 = require("../app/business/UserBusiness");
const UserSchema_1 = require("../app/persistance/schemas/UserSchema");
class UserController extends BaseController_1.BaseController {
    constructor() {
        super(UserSchema_1.default);
        this.UserBusiness = new UserBusiness_1.UserBusiness();
    }
}
exports.UserController = UserController;
