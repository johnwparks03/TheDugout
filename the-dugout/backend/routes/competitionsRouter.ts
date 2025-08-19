//Defines competitions API endpoint

import { Router } from 'express';
import {
  addCompetition,
  deleteCompetition,
  getCompetitions,
} from '../controllers/competitionsController';

const competitionsRouter = Router();

// GET /api/competitions
competitionsRouter.get('/', getCompetitions);

// POST /api/competitions
competitionsRouter.post('/', addCompetition);

// DELETE /api/competitions
competitionsRouter.delete('/:id', deleteCompetition);

export default competitionsRouter;
