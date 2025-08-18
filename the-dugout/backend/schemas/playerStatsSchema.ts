import { z } from 'zod';

export const playerStatsSchema = z.object({
  player_id: z.number(),
  competition_id: z.number(),
  season: z.string().min(4),
  matches_played: z.number().optional(),
  goals: z.number().optional(),
  assists: z.number().optional(),
  yellow_cards: z.number().optional(),
  red_cards: z.number().optional(),
});
