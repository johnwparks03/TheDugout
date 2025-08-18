"use strict";
//Defines competitions API endpoint
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const competitionsController_1 = require("../controllers/competitionsController");
const competitionsRouter = (0, express_1.Router)();
// GET /api/competitions
competitionsRouter.get('/', competitionsController_1.getCompetitions);
// POST /api/competitions
competitionsRouter.post('/', competitionsController_1.addCompetition);
exports.default = competitionsRouter;
