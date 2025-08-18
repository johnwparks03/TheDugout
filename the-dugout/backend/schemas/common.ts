import { z } from 'zod';

export const dateStringSchema = z
  .string()
  .refine(
    (val) => {
      // Strict regex check
      if (!/^\d{4}-\d{2}-\d{2}$/.test(val)) return false;

      // Parse into Date
      const date = new Date(val);
      // Ensure it's valid and matches exactly (avoids 2025-02-30 turning into 2025-03-02)
      return !isNaN(date.getTime()) && val === date.toISOString().split('T')[0];
    },
    {
      message: 'Founded must be a valid date in YYYY-MM-DD format',
    }
  )
  .transform((val) => new Date(val));
