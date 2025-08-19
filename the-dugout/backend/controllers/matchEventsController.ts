import { Request, Response } from 'express';
import pool from '../db/index';
import { MatchEvent } from '../types/matchEvent';
import { matchEventSchema } from '../schemas/matchEventSchema';

export const getMatchEvents = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      'SELECT * FROM match_events ORDER BY match_event_id DESC;'
    );
    res.json(result.rows as MatchEvent[]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const addMatchEvent = async (
  req: Request<{}, {}, MatchEvent>,
  res: Response
) => {
  const parseResult = matchEventSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.message });
  }

  const {
    match_id,
    minute,
    player_id,
    related_player_id,
    event_type,
    description,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO match_events (match_id, minute, player_id, related_player_id, event_type, description)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [match_id, minute, player_id, related_player_id, event_type, description]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const deleteMatchEvent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM match_events WHERE match_event_id = $1 RETURNING *',
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Match event not found' });
    }

    res.status(200).json({
      message: 'Match event deleted successfully',
      matchEvent: result.rows[0],
    });
  } catch (err) {
    console.error('Error deleting match event:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
