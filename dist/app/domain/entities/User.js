"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(user) {
        this.User = user;
    }
    get FirstName() {
        return this.User.name.first_name;
    }
}
exports.User = User;
Object.seal(User);
