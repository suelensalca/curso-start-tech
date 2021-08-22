import { Router } from 'express';
import User from './app/models/User';
import database from './database';

const routes = Router();

routes.get('/', async (req, res) => {

   const result = await database.connection.sync() 
  // console.log(result)

   try {
    const user = await User.create({
        name: 'Suelen',
        email: 'suelen2@email.com',
        passwordHash: '12345'
    });
    return res.json(user)
   } catch (error) {
       console.log(error)
       return res.json(error.errors.map((error) => error.message))
   }


})

export default routes;