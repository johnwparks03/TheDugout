//Defines competitions API endpoint

import { Router } from 'express';
import {
  addPlayer,
  deletePlayer,
  getPlayers,
} from '../controllers/playersController';

const playersRouter = Router();

// GET /api/players
playersRouter.get('/', getPlayers);

// POST /api/players
playersRouter.post('/', addPlayer);

// DELETE /api/players
playersRouter.delete('/:id', deletePlayer);

export default playersRouter;
