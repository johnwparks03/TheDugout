"use strict";
//Defines competitions API endpoint
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playerStatsController_1 = require("../controllers/playerStatsController");
const playerStatsRouter = (0, express_1.Router)();
// GET /api/playerStats
playerStatsRouter.get('/', playerStatsController_1.getPlayerStats);
exports.default = playerStatsRouter;
