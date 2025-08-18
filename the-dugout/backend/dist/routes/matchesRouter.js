"use strict";
//Defines competitions API endpoint
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const matchesController_1 = require("../controllers/matchesController");
const matchesRouter = (0, express_1.Router)();
// GET /api/matches
matchesRouter.get('/', matchesController_1.getMatches);
exports.default = matchesRouter;
