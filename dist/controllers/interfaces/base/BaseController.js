"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const BaseBusiness_1 = require("../../../app/business/interfaces/base/BaseBusiness");
const service_1 = require("../../../app/persistance/common/service");
class BaseController {
    constructor(schemaModel) {
        this.entityBusiness = new BaseBusiness_1.BaseBusiness(schemaModel);
    }
    create(req, res) {
        // this check whether all the fields were send through the request or not
        // if (req.body.name && req.body.name.first_name && req.body.name.middle_name && req.body.name.last_name &&
        //     req.body.email &&
        //     req.body.phone_number &&
        //     req.body.gender) {
        let user_params = req.body;
        this.entityBusiness.create(user_params, (err, user) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse('create user successfully', user, res);
            }
        });
        // } else {
        //     // error response if some fields are missing in request body
        //     insufficientParameters(res);
        // }
    }
    update(req, res) {
        // if (req.params.id &&
        //     req.body.name || req.body.name.first_name || req.body.name.middle_name || req.body.name.last_name ||
        //     req.body.email ||
        //     req.body.phone_number ||
        //     req.body.gender) {
        const user_params = req.body;
        this.entityBusiness.update(req.params.id, user_params, (err, result) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse('update user successfully', null, res);
            }
        });
        // } else {
        //     insufficientParameters(res);
        // }
    }
    delete(req, res) {
        if (req.params.id) {
            this.entityBusiness.delete(req.params.id, (err, result) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else if (result.deletedCount !== 0) {
                    service_1.successResponse('delete user successfully', null, res);
                }
                else {
                    service_1.failureResponse('invalid user', null, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    retrieve(req, res) {
        try {
            this.entityBusiness.retrieve((error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
    findById(req, res) {
        try {
            var _id = req.params.id;
            this.entityBusiness.findById(_id, (error, result) => {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}
exports.BaseController = BaseController;
