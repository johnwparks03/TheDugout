"use strict";
//Defines competitions API endpoint
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const matchEventsController_1 = require("../controllers/matchEventsController");
const matchEventsRouter = (0, express_1.Router)();
// GET /api/matchEvents
matchEventsRouter.get('/', matchEventsController_1.getMatchEvents);
exports.default = matchEventsRouter;
