import { z } from 'zod';
import { MatchStatus } from '../types/match';
import { dateStringSchema } from './common';

export const matchSchema = z.object({
  home_team_id: z.number(),
  away_team_id: z.number(),
  match_date: dateStringSchema,
  status: z.enum(Object.values(MatchStatus) as [string, ...string[]]),
  home_goals: z.number().optional(),
  away_goals: z.number().optional(),
  competition_id: z.number(),
});
