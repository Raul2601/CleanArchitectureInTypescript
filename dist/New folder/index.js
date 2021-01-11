"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const SpartanRepository_1 = require("./repositories/SpartanRepository");
const Spartan_1 = require("./entities/Spartan");
(() => __awaiter(void 0, void 0, void 0, function* () {
    // connecting at mongoClient
    const connection = yield mongodb_1.MongoClient.connect('mongodb://localhost');
    const db = connection.db('warriors');
    // our operations
    // creating a spartan
    const spartan = new Spartan_1.Spartan('Leonidas', 1020);
    // initializing the repository
    const repository = new SpartanRepository_1.SpartanRepository(db, 'spartans');
    // call create method from generic repository
    const result = yield repository.create(spartan);
    console.log(`spartan inserted with ${result ? 'success' : 'fail'}`);
    //call specific method from spartan class
    const count = yield repository.countOfSpartans();
    console.log(`the count of spartans is ${count}`);
}))();
