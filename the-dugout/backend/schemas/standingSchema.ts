import { z } from 'zod';

export const standingSchema = z.object({
  competition_id: z.number(),
  team_id: z.number(),
  season: z.string().min(4),
  position: z.number().optional(),
  points: z.number().optional(),
  played: z.number().optional(),
  won: z.number().optional(),
  drawn: z.number().optional(),
  lost: z.number().optional(),
  goals_for: z.number().optional(),
  goals_against: z.number().optional(),
  goal_difference: z.number().optional(),
});
