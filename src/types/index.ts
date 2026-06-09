export type Platform = "youtube" | "tiktok" | "instagram" | "all";

export type CompetitionLevel = "high" | "medium" | "low";

export type TagCategory = "viral" | "balanced" | "niche" | "long-tail";

export type QualityScore = 1 | 2 | 3 | 4 | 5;

export interface Hashtag {
  tag: string;
  score: QualityScore;
  category: TagCategory;
  competition: CompetitionLevel;
  platform: Platform[];
  volume: "high" | "medium" | "low";
}

export interface HashtagGroup {
  category: TagCategory;
  title: string;
  description: string;
  hashtags: Hashtag[];
}

export interface GenerateRequest {
  keyword: string;
  platform: Platform[];
  title?: string;
}

export interface GenerateResponse {
  platform: Platform;
  groups: HashtagGroup[];
  aiNote: string;
}

export interface PlatformTab {
  id: Platform;
  label: string;
  maxTags: number;
}