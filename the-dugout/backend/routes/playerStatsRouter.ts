//Defines competitions API endpoint

import { Router } from 'express';
import {
  addPlayerStats,
  getPlayerStats,
} from '../controllers/playerStatsController';

const playerStatsRouter = Router();

// GET /api/playerStats
playerStatsRouter.get('/', getPlayerStats);

// POST /api/playerStats
playerStatsRouter.post('/', addPlayerStats);

export default playerStatsRouter;
