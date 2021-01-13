var ObjectId = require('mongoose').Types.ObjectId;
import { Response, NextFunction } from 'express';
import Joi = require("joi");
import JoiObjectId from "joi-objectid";

export class BaseValidator {

    protected validateId(req, res, next) {
        var schema = Joi.object().keys({
            id: JoiObjectId.required().label('Id must be a valid mongo id !')
        })
        var result = schema.validate({ id: req.params.id });

        this.nextOrReturn(result, res, next);
    }

    protected nextOrReturn(result, res: Response, next: NextFunction) {
        if (result.error == null) {
            next();
        }
        else {
            res.status(422).json({ error: result.error });
            return;
        }
    }
}
