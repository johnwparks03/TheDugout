import { z } from 'zod';
import { dateStringSchema } from './common';

export const teamSchema = z.object({
  name: z.string().min(1),
  short_name: z.string().min(1).max(5),
  competition_id: z.number(),
  city: z.string().optional(),
  country_code: z.string().length(3), // ISO country code
  founded: dateStringSchema,
  stadium: z.string(),
});
