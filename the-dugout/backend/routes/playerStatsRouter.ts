//Defines competitions API endpoint

import { Router } from 'express';
import {
  addPlayerStats,
  deletePlayerStats,
  getPlayerStats,
} from '../controllers/playerStatsController';

const playerStatsRouter = Router();

// GET /api/playerStats
playerStatsRouter.get('/', getPlayerStats);

// POST /api/playerStats
playerStatsRouter.post('/', addPlayerStats);

playerStatsRouter.delete('/:id', deletePlayerStats);

export default playerStatsRouter;
