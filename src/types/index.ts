export type Platform = "youtube" | "tiktok" | "instagram" | "all";

export type CompetitionLevel = "high" | "medium" | "low";

export type TagCategory = "viral" | "balanced" | "niche" | "long-tail";

export type QualityScore = 1 | 2 | 3 | 4 | 5;

export type HashtagLanguage = "id" | "en" | "other";

export interface Hashtag {
  tag: string;
  score: QualityScore;
  category: TagCategory;
  competition: CompetitionLevel;
  platform: Platform[];
  volume: "high" | "medium" | "low";
  language?: HashtagLanguage;
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
  language?: HashtagLanguage;
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

export const languageOptions = [
  { id: "all" as const, label: "Semua Bahasa" },
  { id: "id" as const, label: "Bahasa Indonesia" },
  { id: "en" as const, label: "English" },
  { id: "other" as const, label: "Bahasa Lainnya" },
];