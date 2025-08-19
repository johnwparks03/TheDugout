import { Request, Response } from 'express';
import pool from '../db/index';
import { Team } from '../types/team';
import { teamSchema } from '../schemas/teamSchema';

export const getTeams = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      'SELECT * FROM teams ORDER BY team_id DESC;'
    );
    res.json(result.rows as Team[]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const addTeam = async (req: Request<{}, {}, Team>, res: Response) => {
  const parseResult = teamSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.message });
  }

  const { name, short_name, city, country_code, founded, stadium } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO teams (name, short_name, city, country_code, founded, stadium)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, short_name, city, country_code, founded, stadium]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const deleteTeam = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM teams WHERE team_id = $1 RETURNING *',
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Team not found' });
    }

    res.status(200).json({
      message: 'Team deleted successfully',
      team: result.rows[0],
    });
  } catch (err) {
    console.error('Error deleting team:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
