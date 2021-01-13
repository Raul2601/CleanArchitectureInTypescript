"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidator = void 0;
const Joi = require("joi");
const BaseValidator_1 = require("./base/BaseValidator");
class UserValidator extends BaseValidator_1.BaseValidator {
    constructor() {
        super();
    }
    Validate(req, res, next) {
        let userSchema = Joi.object().keys({
            name: Joi.object().keys({
                first_name: Joi.string().min(3).max(30).regex(/^(\w+\s?)*\s*$/).required().label('First name must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
                last_name: Joi.string().min(3).max(30).regex(/^(\w+\s?)*\s*$/).required().label('Last name must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
            }).unknown(true)
        });
        const result = userSchema.validate(req.body);
        this.nextOrReturn(result, res, next);
    }
}
exports.UserValidator = UserValidator;
