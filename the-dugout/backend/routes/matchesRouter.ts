//Defines competitions API endpoint

import { Router } from 'express';
import {
  addMatch,
  deleteMatch,
  getMatches,
} from '../controllers/matchesController';

const matchesRouter = Router();

// GET /api/matches
matchesRouter.get('/', getMatches);

// POST /api/matches
matchesRouter.post('/', addMatch);

// DELETE /api/matches
matchesRouter.delete('/:id', deleteMatch);

export default matchesRouter;
