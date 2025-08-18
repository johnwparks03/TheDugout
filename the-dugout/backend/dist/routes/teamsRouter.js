"use strict";
//Defines competitions API endpoint
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teamsController_1 = require("../controllers/teamsController");
const teamsRouter = (0, express_1.Router)();
// GET /api/competitions
teamsRouter.get('/', teamsController_1.getTeams);
exports.default = teamsRouter;
