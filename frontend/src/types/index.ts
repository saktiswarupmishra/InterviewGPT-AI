export interface User {
  id: string;
  email: string;
  full_name: string;
  role: string;
  profile?: UserProfile;
  created_at: string;
  is_active: boolean;
}

export interface UserProfile {
  full_name: string;
  phone: string;
  location: string;
  bio: string;
  avatar_url: string;
  linkedin_url: string;
  github_url: string;
  portfolio_url: string;
  experience_years: number;
  target_company: string;
  target_role: string;
  preferred_domains: string[];
}

export interface AuthTokens {
  access_token: string;
  refresh_token: string;
  token_type: string;
  user: User;
}

export interface Interview {
  id: string;
  user_id: string;
  mode: string;
  target_company: string;
  target_role: string;
  status: string;
  difficulty: string;
  domains: string[];
  num_questions: number;
  current_question: number;
  scores?: Record<string, number>;
  created_at: string;
  completed_at?: string;
}

export interface DashboardData {
  total_interviews: number;
  completed_interviews: number;
  in_progress: number;
  average_scores: Record<string, number>;
  recent_interviews: Interview[];
  skill_profile: any;
  streak_days: number;
}

export interface InterviewMode {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  difficulty: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  difficulty: string;
}
