import express from 'express';
import {
  getUsers,
  getUser,
  postUser,
  patchUser,
  deleteUser,
} from '../controllers/registro.controllers.js';

const router = express.Router();

router.get('/registro', getUsers);

router.get('/registro/:id', getUser);

router.post('/registro', postUser);

router.patch('/registro/:id', patchUser);

router.delete('/registro/:id', deleteUser);

export default router;
