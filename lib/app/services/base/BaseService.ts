import { IRead } from "../interfaces/IRead";
import { IWrite } from "../interfaces/IWrite";
import mongoose = require("mongoose");


export class BaseService<T extends mongoose.Document> implements IWrite<T>, IRead<T>{

    private _model: mongoose.Model<mongoose.Document>;

    constructor(schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel;
    }

    async create(item: T, callback: (error: any, result: mongoose.Document) => void) {
        this._model.create(item, callback);
    }

    retrieve(callback: (error: any, result: mongoose.Document[]) => void) {
        this._model.find({}, callback)
    }

    update(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.updateOne({ _id: _id }, item, {}, callback);
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._model.deleteOne({ _id: this.toObjectId(_id) }, {}, (err) => callback(err, null));
    }

    findById(_id: string, callback: (error: any, result: T) => void) {
        this._model.findById(_id, callback);
    }


    private toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }
}