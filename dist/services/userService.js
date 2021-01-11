"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../persistance/models/user");
const BaseService_1 = require("./base/BaseService");
class UserService extends BaseService_1.BaseReposirory {
    constructor() {
        super(user_1.default);
    }
    createUser(user_params, callback) {
        const _session = new user_1.default(user_params);
        _session.save(callback);
    }
    filterUser(query, callback) {
        user_1.default.findOne(query, callback);
    }
    updateUser(user_params, callback) {
        const query = { _id: user_params._id };
        user_1.default.findOneAndUpdate(query, user_params, callback);
    }
    deleteUser(_id, callback) {
        const query = { _id: _id };
        user_1.default.deleteOne(query, callback);
    }
}
exports.default = UserService;
