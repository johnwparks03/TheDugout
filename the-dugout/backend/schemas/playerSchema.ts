import { z } from 'zod';
import { dateStringSchema } from './common';

export const playerSchema = z.object({
  team_id: z.number(),
  name: z.string(),
  nationality: z.string().length(3),
  birth_date: dateStringSchema,
  position: z.string().min(2),
});
