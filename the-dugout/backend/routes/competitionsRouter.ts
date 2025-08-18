//Defines competitions API endpoint

import { Router } from 'express';
import {
  addCompetition,
  getCompetitions,
} from '../controllers/competitionsController';

const competitionsRouter = Router();

// GET /api/competitions
competitionsRouter.get('/', getCompetitions);

// POST /api/competitions
competitionsRouter.post('/', addCompetition);

export default competitionsRouter;
