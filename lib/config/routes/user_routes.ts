import { Application, Request, Response } from 'express';
import { UserController } from '../../controllers/UserController';

export class UserRoutes {

    private user_controller: UserController = new UserController();

    public route(app: Application) {

        app.get('/api/users', (req: Request, res: Response) => {
            this.user_controller.retrieve(req, res);
        });

        app.post('/api/user', (req: Request, res: Response) => {
            this.user_controller.create(req, res);
        });

        app.get('/api/user/:id', (req: Request, res: Response) => {
            this.user_controller.findById(req, res);
        });

        app.put('/api/user/:id', (req: Request, res: Response) => {
            this.user_controller.update(req, res);
        });

        app.delete('/api/user/:id', (req: Request, res: Response) => {
            this.user_controller.delete(req, res);
        });
    }
}