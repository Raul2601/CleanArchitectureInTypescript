import { IRead } from "../common/IRead";
import { IWrite } from "../common/IWrite";
import mongoose = require("mongoose");
import { BaseService } from "../../../services/base/BaseService";

export class BaseBusiness<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

    private repository: BaseService<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this.repository = new BaseService(schemaModel);
    }

    create(item: T, callback: (error: any, result: any) => void) {
        this.repository.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this.repository.retrieve(callback);
    }

    update(_id: string, item: T, callback: (error: any, result: any) => void) {

        this.repository.findById(_id, (err, res) => {
            if (err) callback(err, res);

            else
                this.repository.update(res._id, item, callback);
        });
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this.repository.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: T) => void) {
        this.repository.findById(_id, callback);
    }


}
