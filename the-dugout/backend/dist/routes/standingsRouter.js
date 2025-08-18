"use strict";
//Defines competitions API endpoint
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const standingsController_1 = require("../controllers/standingsController");
const standingsRouter = (0, express_1.Router)();
// GET /api/standings
standingsRouter.get('/', standingsController_1.getStandings);
exports.default = standingsRouter;
