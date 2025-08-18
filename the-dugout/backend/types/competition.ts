export interface Competition {
  competition_id: number;
  name: string;
  country_code: string;
  season: string;
  competition_type: CompetitionType;
  logo_url?: string; // optional
}

export enum CompetitionType {
  LEAGUE = 'league',
  CUP = 'cup',
}
