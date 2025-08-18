//Defines competitions API endpoint

import { Router } from 'express';
import {
  addMatchEvent,
  getMatchEvents,
} from '../controllers/matchEventsController';

const matchEventsRouter = Router();

// GET /api/matchEvents
matchEventsRouter.get('/', getMatchEvents);

// POST /api/matchEvents
matchEventsRouter.post('/', addMatchEvent);

export default matchEventsRouter;
