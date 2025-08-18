"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCompetition = exports.getCompetitions = void 0;
const index_1 = __importDefault(require("../db/index"));
const competition_1 = require("../types/competition");
const getCompetitions = async (req, res) => {
    try {
        const result = await index_1.default.query('SELECT * FROM competitions ORDER BY competition_id DESC;');
        res.json(result.rows);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
exports.getCompetitions = getCompetitions;
const addCompetition = async (req, res) => {
    const { name, country_code, season, competition_type, logo_url } = req.body;
    if (!Object.values(competition_1.CompetitionType).includes(competition_type)) {
        return res.status(400).json({ msg: 'Invalid competition type' });
    }
    try {
        const result = await index_1.default.query(`INSERT INTO competitions (name, country_code, season, competition_type, logo_url)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`, [name, country_code, season, competition_type, logo_url]);
        res.status(201).json(result.rows[0]);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
exports.addCompetition = addCompetition;
