"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStandings = void 0;
const index_1 = __importDefault(require("../db/index"));
const getStandings = async (req, res) => {
    try {
        const result = await index_1.default.query('SELECT * FROM standings ORDER BY standing_id DESC;');
        res.json(result.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
exports.getStandings = getStandings;
