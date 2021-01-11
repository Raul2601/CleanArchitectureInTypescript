import User from "../persistance/schemas/UserSchema";
import { IUser } from '../domain/entities/interfaces/IUser';
import { BaseRepository } from './base/BaseService';
import { IUserService } from "./IUserService";

export class UserService extends BaseRepository<IUser> implements IUserService {
    constructor() {
        super(User);
    }
}