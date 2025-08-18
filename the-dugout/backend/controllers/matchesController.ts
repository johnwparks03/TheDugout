import { Request, Response } from 'express';
import pool from '../db/index';
import { Match } from '../types/match';
import { matchSchema } from '../schemas/matchSchema';

export const getMatches = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      'SELECT * FROM matches ORDER BY match_id DESC;'
    );
    res.json(result.rows as Match[]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const addMatch = async (req: Request<{}, {}, Match>, res: Response) => {
  const parseResult = matchSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.message });
  }

  const {
    home_team_id,
    away_team_id,
    match_date,
    status,
    home_goals,
    away_goals,
    competition_id,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO matches (home_team_id, away_team_id, match_date, status, home_goals, away_goals, competition_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        home_team_id,
        away_team_id,
        match_date,
        status,
        home_goals,
        away_goals,
        competition_id,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
