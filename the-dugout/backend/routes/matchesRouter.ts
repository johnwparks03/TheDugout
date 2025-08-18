//Defines competitions API endpoint

import { Router } from 'express';
import { addMatch, getMatches } from '../controllers/matchesController';

const matchesRouter = Router();

// GET /api/matches
matchesRouter.get('/', getMatches);

// POST /api/matches
matchesRouter.post('/', addMatch);

export default matchesRouter;
