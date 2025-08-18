export interface Standing {
  standing_id: number;
  competition_id: number;
  team_id: number;
  season: string;
  position?: number;
  points?: number;
  played?: number;
  won?: number;
  drawn?: number;
  lost?: number;
  goals_for?: number;
  goals_against?: number;
  goal_difference?: number;
}
