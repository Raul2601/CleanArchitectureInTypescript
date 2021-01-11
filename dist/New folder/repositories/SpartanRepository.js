"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpartanRepository = void 0;
const BaseRepository_1 = require("./base/BaseRepository");
class SpartanRepository extends BaseRepository_1.BaseReposirory {
    countOfSpartans() {
        return this._collection.count({});
    }
    findOneById(id) {
        throw new Error("Method not implemented.");
    }
}
exports.SpartanRepository = SpartanRepository;
