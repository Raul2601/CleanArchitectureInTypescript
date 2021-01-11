import { IUser } from '../app/domain/entities/interfaces/IUser';
import { BaseController } from './interfaces/base/BaseController';
import { UserBusiness } from '../app/business/UserBusiness';
import User from '../app/persistance/schemas/UserSchema';

export class UserController extends BaseController<IUser>{

    private UserBusiness: UserBusiness = new UserBusiness();

    constructor() {
        super(User);
    }
}