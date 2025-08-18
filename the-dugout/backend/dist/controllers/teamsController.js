"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeams = void 0;
const index_1 = __importDefault(require("../db/index"));
const getTeams = async (req, res) => {
    try {
        const result = await index_1.default.query('SELECT * FROM teams ORDER BY team_id DESC;');
        res.json(result.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
exports.getTeams = getTeams;
