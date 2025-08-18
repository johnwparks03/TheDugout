export interface Match {
  match_id: number;
  home_team_id: number;
  away_team_id: number;
  match_date: Date;
  status: MatchStatus;
  home_goals?: number;
  away_goals?: number;
  competition_id: number;
}

export enum MatchStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  FINISHED = 'finished',
  POSTPONED = 'postponed',
  CANCELLED = 'cancelled',
}
