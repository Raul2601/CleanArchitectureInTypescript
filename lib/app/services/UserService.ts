import User from "../persistance/schemas/UserSchema";
import { IUser } from '../domain/entities/interfaces/IUser';
import { BaseService } from './base/BaseService';
import { IUserService } from "./IUserService";

export class UserService extends BaseService<IUser> implements IUserService {
    constructor() {
        super(User);
    }
}