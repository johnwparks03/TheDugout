export interface Team {
  team_id: number;
  name: string;
  short_name: string;
  city?: string;
  country_code?: string;
  founded?: Date;
  stadium?: string;
}
