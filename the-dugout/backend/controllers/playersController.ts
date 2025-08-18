import { Request, Response } from 'express';
import pool from '../db/index';
import { Player } from '../types/player';
import { playerSchema } from '../schemas/playerSchema';

export const getPlayers = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      'SELECT * FROM players ORDER BY player_id DESC;'
    );
    res.json(result.rows as Player[]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const addPlayer = async (
  req: Request<{}, {}, Player>,
  res: Response
) => {
  const parseResult = playerSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.message });
  }

  const { team_id, name, nationality, birth_date, position } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO players (team_id, name, nationality, birth_date, position)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [team_id, name, nationality, birth_date, position]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
