import Joi = require("joi");
import { BaseValidator } from "./base/BaseValidator";
import { Request, Response, NextFunction } from 'express';

export class UserValidator extends BaseValidator {

    private userSchema: Joi.ObjectSchema<any> = undefined;

    constructor() {
        super();

        this.userSchema = Joi.object().keys({
            user: Joi.object().keys({
                name: Joi.object().keys({
                    first_name: Joi.string().min(3).max(30).regex(/^(\w+\s?)*\s*$/).required().label('First name must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
                    last_name: Joi.string().min(3).max(30).regex(/^(\w+\s?)*\s*$/).required().label('Last name must be a string (contain only a-z, A-Z), have between 3 to 30 characters long !'),
                })
            }).unknown(true)
        });
    }

    public Validate(req: Request, res: Response, next: NextFunction) {
        const result = this.userSchema.validate({
            user: req.body.user
        })
        this.nextOrReturn(result, res, next);
    }
}