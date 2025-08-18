//Defines competitions API endpoint

import { Router } from 'express';
import { addStanding, getStandings } from '../controllers/standingsController';

const standingsRouter = Router();

// GET /api/standings
standingsRouter.get('/', getStandings);

// POST /api/standings
standingsRouter.post('/', addStanding);

export default standingsRouter;
