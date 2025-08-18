export interface PlayerStats {
  player_stats_id: number;
  player_id: number;
  competition_id: number;
  season: string;
  matches_played?: number;
  goals?: number;
  assists?: number;
  yellow_cards?: number;
  red_cards?: number;
}
