import { z } from 'zod';
import { MatchEventType } from '../types/matchEvent';

export const matchEventSchema = z.object({
    match_id: z.number(),
    minute: z.number(),
    player_id: z.number(),
    related_player_id: z.number().optional(),
    event_type: z.enum(
        Object.values(MatchEventType) as [string, ...string[]]
    ),
    description: z.string().optional()
});