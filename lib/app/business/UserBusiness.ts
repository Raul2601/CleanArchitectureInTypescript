import { IUser } from "../domain/entities/interfaces/IUser";
import User from "../persistance/schemas/UserSchema";
import { UserService } from "../services/UserService"
import { BaseBusiness } from "./interfaces/base/BaseBusiness";
import { IUserBusiness } from "./interfaces/IUserBusiness";

export class UserBusiness extends BaseBusiness<IUser> implements IUserBusiness {

    private _userService: UserService;

    constructor() {
        super(User);
        this._userService = new UserService();
    }
}