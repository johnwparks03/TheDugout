//Defines competitions API endpoint

import { Router } from 'express';
import {
  addStanding,
  deleteStanding,
  getStandings,
} from '../controllers/standingsController';

const standingsRouter = Router();

// GET /api/standings
standingsRouter.get('/', getStandings);

// POST /api/standings
standingsRouter.post('/', addStanding);

// DELETE /api/standings
standingsRouter.delete('/:id', deleteStanding);

export default standingsRouter;
