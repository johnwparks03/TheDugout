//Defines competitions API endpoint

import { Router } from 'express';
import { addPlayer, getPlayers } from '../controllers/playersController';

const playersRouter = Router();

// GET /api/players
playersRouter.get('/', getPlayers);

// POST /api/players
playersRouter.post('/', addPlayer);

export default playersRouter;
