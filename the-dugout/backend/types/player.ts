export interface Player {
  player_id: number;
  team_id: number;
  name: string;
  nationality?: string;
  birth_date?: Date;
  position?: string;
}
