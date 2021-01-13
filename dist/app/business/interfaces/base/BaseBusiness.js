"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseBusiness = void 0;
const BaseService_1 = require("../../../services/base/BaseService");
class BaseBusiness {
    constructor(schemaModel) {
        this.repository = new BaseService_1.BaseService(schemaModel);
    }
    create(item, callback) {
        this.repository.create(item, callback);
    }
    retrieve(callback) {
        this.repository.retrieve(callback);
    }
    update(_id, item, callback) {
        this.repository.findById(_id, (err, res) => {
            if (err)
                callback(err, res);
            else
                this.repository.update(res._id, item, callback);
        });
    }
    delete(_id, callback) {
        this.repository.delete(_id, callback);
    }
    findById(_id, callback) {
        this.repository.findById(_id, callback);
    }
}
exports.BaseBusiness = BaseBusiness;
