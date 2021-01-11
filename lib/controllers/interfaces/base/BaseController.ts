import { BaseBusiness } from "../../../app/business/interfaces/base/BaseBusiness";
import { IReadController } from "../common/IReadController";
import { IWriteController } from "../common/IWriteController";
import { Request, Response } from 'express';
import mongoose = require("mongoose");
import { failureResponse, insufficientParameters, mongoError, successResponse } from "../../../app/persistance/common/service";
import { BaseEntity } from "../../../app/domain/entities/interfaces/base/BaseEntity";

export class BaseController<T extends BaseEntity> implements IReadController, IWriteController {

    public entityBusiness: BaseBusiness<mongoose.Document>

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this.entityBusiness = new BaseBusiness(schemaModel);
    }

    public create(req: Request, res: Response) {
        // this check whether all the fields were send through the request or not
        if (req.body.name && req.body.name.first_name && req.body.name.middle_name && req.body.name.last_name &&
            req.body.email &&
            req.body.phone_number &&
            req.body.gender) {

            let user_params: T = <T>req.body;

            this.entityBusiness.create(user_params, (err, user) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('create user successfully', user, res);
                }
            })
        } else {
            // error response if some fields are missing in request body
            insufficientParameters(res);
        }
    }

    public update(req: Request, res: Response) {
        if (req.params.id &&
            req.body.name || req.body.name.first_name || req.body.name.middle_name || req.body.name.last_name ||
            req.body.email ||
            req.body.phone_number ||
            req.body.gender) {

            const user_params: T = <T>req.body;

            this.entityBusiness.update(req.params.id, user_params, (err, user) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('update user successfully', null, res);
                }
            })
        } else {
            insufficientParameters(res);
        }
    }

    public delete(req: Request, res: Response) {
        if (req.params.id) {

            this.entityBusiness.delete(req.params.id, (err, result) => {
                if (err) {
                    mongoError(err, res);
                } else if (result.deletedCount !== 0) {
                    successResponse('delete user successfully', null, res);
                } else {
                    failureResponse('invalid user', null, res);
                }
            })
        } else {
            insufficientParameters(res);
        }
    }

    public retrieve(req: Request, res: Response): void {
        try {
            this.entityBusiness.retrieve((error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }

    public findById(req: Request, res: Response): void {
        try {

            var _id: string = req.params._id;
            this.entityBusiness.findById(_id, (error, result) => {
                if (error) res.send({ "error": "error" });
                else res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });

        }
    }

} 