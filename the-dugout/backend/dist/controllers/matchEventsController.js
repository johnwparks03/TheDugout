"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMatchEvents = void 0;
const index_1 = __importDefault(require("../db/index"));
const getMatchEvents = async (req, res) => {
    try {
        const result = await index_1.default.query('SELECT * FROM match_events ORDER BY match_event_id DESC;');
        res.json(result.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
exports.getMatchEvents = getMatchEvents;
