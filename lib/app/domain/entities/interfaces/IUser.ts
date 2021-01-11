import { ModificationNote } from "../../../persistance/common/model";
import mongoose = require("mongoose");

export interface IUser extends mongoose.Document {
    name: {
        first_name: String;
        middle_name: String;
        last_name: String;
    };
    email: String;
    phone_number: String;
    gender: String;
    is_deleted?: Boolean;
    modification_notes: ModificationNote[]
}