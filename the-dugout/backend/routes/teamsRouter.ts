//Defines competitions API endpoint

import { Router } from 'express';
import { addTeam, deleteTeam, getTeams } from '../controllers/teamsController';

const teamsRouter = Router();

// GET /api/teams
teamsRouter.get('/', getTeams);

// POST /api/teams
teamsRouter.post('/', addTeam);

// DELETE /api/teams
teamsRouter.delete('/:id', deleteTeam);

export default teamsRouter;
