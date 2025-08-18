import { z } from 'zod';
import { CompetitionType } from '../types/competition';

export const competitionSchema = z.object({
  name: z.string().min(1),
  country_code: z.string().length(3), // ISO country code
  season: z.string().min(4),
  competition_type: z.enum(
    Object.values(CompetitionType) as [string, ...string[]]
  ),
  logo_url: z.string().url().optional(),
});
