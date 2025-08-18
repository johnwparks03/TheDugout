import { Request, Response } from 'express';
import pool from '../db/index';
import { Standing } from '../types/standing';
import { standingSchema } from '../schemas/standingSchema';

export const getStandings = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      'SELECT * FROM standings ORDER BY standing_id DESC;'
    );
    res.json(result.rows as Standing[]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const addStanding = async (
  req: Request<{}, {}, Standing>,
  res: Response
) => {
  const parseResult = standingSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.message });
  }

  const {
    competition_id,
    team_id,
    season,
    position,
    points,
    played,
    won,
    drawn,
    lost,
    goals_for,
    goals_against,
    goal_difference,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO standings (competition_id, team_id, season, position, points, played, won, drawn, lost, goals_for, goals_against, goal_difference)
      VALUES ($1, $2, $3, $4, $5, $6, $7,$8, $9, $10, $11, $12) RETURNING *`,
      [
        competition_id,
        team_id,
        season,
        position,
        points,
        played,
        won,
        drawn,
        lost,
        goals_for,
        goals_against,
        goal_difference,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
