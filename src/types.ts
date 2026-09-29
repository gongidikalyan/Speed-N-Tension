export type RoutePath =
  | '/'
  | '/privacy-policy'
  | '/terms'
  | '/account-deletion'
  | '/cookie-policy'
  | '/refund-policy'
  | '/disclaimer'
  | '/contact';

export type ThemeMode = 'dark' | 'light';

export interface ChallengeType {
  id: string;
  name: string;
  category: 'Speed' | 'Cognitive' | 'Reflex' | 'Precision' | 'Endurance';
  difficulty: 'EASY' | 'BRUTAL' | 'NIGHTMARE' | 'UNKNOWN';
  description: string;
  rule: string;
  isMystery?: boolean;
}

export interface PlayerReaction {
  quote: string;
  context: string;
  reactionTime: string;
}
