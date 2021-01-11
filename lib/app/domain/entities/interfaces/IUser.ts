import { ModificationNote } from "../../../persistance/common/model";
import { BaseEntity } from "./base/BaseEntity";

export interface IUser extends BaseEntity {
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