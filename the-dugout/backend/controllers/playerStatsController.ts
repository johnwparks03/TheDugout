import { Request, Response } from 'express';
import pool from '../db/index';
import { PlayerStats } from '../types/playerStats';
import { playerStatsSchema } from '../schemas/playerStatsSchema';

export const getPlayerStats = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      'SELECT * FROM player_stats ORDER BY player_stats_id DESC;'
    );
    res.json(result.rows as PlayerStats[]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const addPlayerStats = async (
  req: Request<{}, {}, PlayerStats>,
  res: Response
) => {
  const parseResult = playerStatsSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.message });
  }

  const {
    player_id,
    competition_id,
    season,
    matches_played,
    goals,
    assists,
    yellow_cards,
    red_cards,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO player_stats (player_id, competition_id, season, matches_played, goals, assists, yellow_cards, red_cards)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [
        player_id,
        competition_id,
        season,
        matches_played,
        goals,
        assists,
        yellow_cards,
        red_cards,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
