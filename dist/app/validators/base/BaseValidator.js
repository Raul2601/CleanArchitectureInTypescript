"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseValidator = void 0;
var ObjectId = require('mongoose').Types.ObjectId;
const Joi = require("joi");
const joi_objectid_1 = require("joi-objectid");
class BaseValidator {
    validateId(req, res, next) {
        var schema = Joi.object().keys({
            id: joi_objectid_1.default.required().label('Id must be a valid mongo id !')
        });
        var result = schema.validate({ id: req.params.id });
        this.nextOrReturn(result, res, next);
    }
    nextOrReturn(result, res, next) {
        if (result.error == null) {
            next();
        }
        else {
            res.status(422).json({ error: result.error });
            return;
        }
    }
}
exports.BaseValidator = BaseValidator;
