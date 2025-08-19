//Defines competitions API endpoint

import { Router } from 'express';
import {
  addMatchEvent,
  deleteMatchEvent,
  getMatchEvents,
} from '../controllers/matchEventsController';

const matchEventsRouter = Router();

// GET /api/matchEvents
matchEventsRouter.get('/', getMatchEvents);

// POST /api/matchEvents
matchEventsRouter.post('/', addMatchEvent);

// DELETE /api/matchEvents
matchEventsRouter.delete('/:id', deleteMatchEvent);

export default matchEventsRouter;
