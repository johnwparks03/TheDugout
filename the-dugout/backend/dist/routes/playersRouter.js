"use strict";
//Defines competitions API endpoint
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playersController_1 = require("../controllers/playersController");
const playersRouter = (0, express_1.Router)();
// GET /api/players
playersRouter.get('/', playersController_1.getPlayers);
exports.default = playersRouter;
