"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const UserValidator_1 = require("../../app/validators/UserValidator");
const UserController_1 = require("../../controllers/UserController");
class UserRoutes {
    constructor() {
        this.user_controller = new UserController_1.UserController();
        this.userValidator = new UserValidator_1.UserValidator();
    }
    route(app) {
        app.get('/api/users', (req, res) => {
            this.user_controller.retrieve(req, res);
        });
        app.post('/api/user', // this.userValidator.Validate, 
        (req, res) => {
            this.user_controller.create(req, res);
        });
        app.get('/api/user/:id', (req, res) => {
            this.user_controller.findById(req, res);
        });
        app.put('/api/user/:id', (req, res) => {
            this.user_controller.update(req, res);
        });
        app.delete('/api/user/:id', (req, res) => {
            this.user_controller.delete(req, res);
        });
    }
}
exports.UserRoutes = UserRoutes;
