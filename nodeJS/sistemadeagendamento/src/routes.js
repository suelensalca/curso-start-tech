import { Router } from 'express';
import User from './app/models/User';
import database from './database';

const routes = Router();

routes.get('/', async (req, res) => {
    // const user = {name: 'su'};
    const user = await User.create({
        name: 'Suelen',
        email: 'suelen@email.com',
        passwordHash: '12345'
    });
    return res.json(user)
})

export default routes;