export interface Team {
  team_id: number;
  name: string;
  short_name: string;
  competition_id: number;
  city?: string;
  country_code?: string;
  founded?: Date;
  stadium?: string;
}
