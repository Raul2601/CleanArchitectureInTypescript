"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const mongoose = require("mongoose");
class BaseRepository {
    constructor(schemaModel) {
        this._model = schemaModel;
    }
    create(item, callback) {
        var model = new this._model(item);
        model.save();
        //this._model.create(item, callback);
    }
    retrieve(callback) {
        this._model.find({}, callback);
    }
    update(_id, item, callback) {
        this._model.update({ _id: _id }, item, {}, callback);
    }
    delete(_id, callback) {
        this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
    }
    findById(_id, callback) {
        this._model.findById(_id, callback);
    }
    toObjectId(_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }
}
exports.BaseRepository = BaseRepository;
