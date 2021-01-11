import { IUser } from './interfaces/IUser';

export class User {
    private User: IUser;

    constructor(user: IUser) {
        this.User = user;
    }

    get FirstName(): String {
        return this.User.name.first_name;
    }
}

Object.seal(User);