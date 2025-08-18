import { Request, Response } from 'express';
import pool from '../db/index';
import { Competition, CompetitionType } from '../types/competition';
import { competitionSchema } from '../schemas/competitionSchema';

export const getCompetitions = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      'SELECT * FROM competitions ORDER BY competition_id DESC;'
    );
    res.json(result.rows as Competition[]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const addCompetition = async (
  req: Request<{}, {}, Competition>,
  res: Response
) => {
  const parseResult = competitionSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.message });
  }

  const { name, country_code, season, competition_type, logo_url } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO competitions (name, country_code, season, competition_type, logo_url)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, country_code, season, competition_type, logo_url]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
