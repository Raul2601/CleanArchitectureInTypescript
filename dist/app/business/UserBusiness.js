"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBusiness = void 0;
const UserSchema_1 = require("../persistance/schemas/UserSchema");
const UserService_1 = require("../services/UserService");
const BaseBusiness_1 = require("./interfaces/base/BaseBusiness");
class UserBusiness extends BaseBusiness_1.BaseBusiness {
    constructor() {
        super(UserSchema_1.default);
        this._userService = new UserService_1.UserService();
    }
}
exports.UserBusiness = UserBusiness;
