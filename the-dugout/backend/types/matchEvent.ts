export interface MatchEvent {
  match_event_id: number;
  match_id: number;
  minute: number;
  player_id: number;
  related_player_id?: number;
  event_type: MatchEventType;
  description?: string;
}

export enum MatchEventType {
  GOAL = 'goal',
  ASSIST = 'assist',
  YELLOW_CARD = 'yellow_card',
  RED_CARD = 'red_card',
  SUBSTITUTION = 'substitution',
  OWN_GOAL = 'own_goal',
  PENALTY_MISSED = 'penalty_missed',
  FOUL_COMMITTED = 'foul_committed',
  OTHER = 'other',
}
