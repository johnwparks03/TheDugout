//Defines competitions API endpoint

import { Router } from 'express';
import { addTeam, getTeams } from '../controllers/teamsController';

const teamsRouter = Router();

// GET /api/teams
teamsRouter.get('/', getTeams);

// POST /api/teams
teamsRouter.post('/', addTeam);

export default teamsRouter;
