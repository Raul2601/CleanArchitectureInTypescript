import { IUser } from "app/domain/entities/interfaces/IUser";
import UserService from "app/services/UserService";
import { IUserBusiness } from "./interfaces/IUserBusiness";

export class UserBusiness implements IUserBusiness {

    private _userService: UserService;

    constructor() {
        this._userService = new UserService();
    }

    create(item: IUser, callback: (error: any, result: any) => void) {
        this._userService.create(item, callback);
    }

    retrieve(callback: (error: any, result: any) => void) {
        this._userService.retrieve(callback);
    }

    update(_id: string, item: IUser, callback: (error: any, result: any) => void) {

        this._userService.findById(_id, (err, res) => {
            if (err) callback(err, res);

            else
                this._userService.update(res._id, item, callback);

        });
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._userService.delete(_id, callback);
    }

    findById(_id: string, callback: (error: any, result: IUser) => void) {
        this._userService.findById(_id, callback);
    }
}