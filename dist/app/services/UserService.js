"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const UserSchema_1 = require("../persistance/schemas/UserSchema");
const BaseService_1 = require("./base/BaseService");
class UserService extends BaseService_1.BaseRepository {
    constructor() {
        super(UserSchema_1.default);
    }
}
exports.UserService = UserService;
