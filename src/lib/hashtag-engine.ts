import { Hashtag, HashtagGroup, Platform, PlatformTab, QualityScore, TagCategory } from "@/types";
import {
  findNiche,
  getTagsByNiche,
  getExpansionsByNiche,
  genericHighVolumeTags,
  platformSpecificTags,
  semanticExpansions,
} from "./hashtag-data";

const platformTabs: PlatformTab[] = [
  { id: "youtube", label: "YouTube", maxTags: 15 },
  { id: "tiktok", label: "TikTok", maxTags: 20 },
  { id: "instagram", label: "Instagram", maxTags: 30 },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function calculateQualityScore(tag: { volume: string; platform: Platform[] }, platform: Platform): QualityScore {
  let score = 0;

  // Base score from volume
  if (tag.volume === "high") score += 3;
  else if (tag.volume === "medium") score += 2;
  else score += 1;

  // Platform match bonus
  if (tag.platform.includes(platform) || tag.platform.includes("all")) {
    score += 2;
  }

  // Normalize to 1-5
  return Math.min(5, Math.max(1, score)) as QualityScore;
}

function classifyTag(tag: { volume: string; tag: string }, niche: string): TagCategory {
  const tagLower = tag.tag.toLowerCase();

  // Long-tail: specific, longer hashtags
  if (tagLower.length > 18 || tagLower.includes("for") || tagLower.includes("tips") || tagLower.includes("guide")) {
    return "long-tail";
  }

  // Viral: high volume, generic
  if (tag.volume === "high" && tagLower.length < 10) {
    return "viral";
  }

  // Niche: medium volume, specific to niche
  if (tag.volume === "low" || (tag.volume === "medium" && tagLower.length > 10)) {
    return "niche";
  }

  // Balanced: medium-high volume, moderate length
  return "balanced";
}

function getSemanticExpansions(keyword: string): string[] {
  const lower = keyword.toLowerCase();
  const expansions: string[] = [];

  for (const [word, related] of Object.entries(semanticExpansions)) {
    if (lower.includes(word)) {
      expansions.push(...related);
    }
    // Also check if any related word matches
    for (const rel of related) {
      if (lower.includes(rel)) {
        expansions.push(word);
        break;
      }
    }
  }

  return [...new Set(expansions)];
}

function generateAiNote(platform: Platform, keyword: string): string {
  const notes: Record<string, string[]> = {
    youtube: [
      `Gunakan kombinasi 5 hashtag besar + 5 hashtag niche untuk meningkatkan peluang muncul di pencarian YouTube.`,
      `YouTube mengoptimalkan 15 hashtag teratas. Fokus pada relevansi dengan judul video "${keyword}".`,
      `Campurkan hashtag populer dengan hashtag spesifik untuk menjangkau audiens yang tepat di YouTube.`,
    ],
    tiktok: [
      `Gunakan kombinasi 5 hashtag viral + 5 hashtag niche untuk meningkatkan peluang masuk FYP TikTok.`,
      `TikTok sangat menyukai hashtag yang sedang tren. Gunakan 3-4 hashtag tren + hashtag niche.`,
      `Untuk TikTok, 20 hashtag pertama adalah yang terpenting. Prioritaskan yang paling relevan dengan "${keyword}".`,
    ],
    instagram: [
      `Instagram optimal dengan 20-30 hashtag. Campurkan hashtar besar, sedang, dan kecil untuk hasil terbaik.`,
      `Gunakan hashtag di caption pertama atau komentar pertama untuk performa terbaik di Instagram.`,
      `Kombinasi 10 hashtag populer + 10 hashtag niche + 10 hashtag spesifik sangat efektif untuk pertumbuhan Instagram.`,
    ],
  };

  const platformNotes = notes[platform] || notes["instagram"];
  return platformNotes[Math.floor(Math.random() * platformNotes.length)];
}

function filterTagsByPlatform(
  tags: Omit<Hashtag, "score" | "category" | "competition">[],
  platform: Platform,
  keyword: string
): Hashtag[] {
  const processed: Hashtag[] = tags
    .filter((t) => t.platform.includes(platform) || t.platform.includes("all") || t.platform.includes("instagram")) // fallback
    .map((t) => ({
      ...t,
      score: calculateQualityScore(t, platform),
      category: classifyTag(t, keyword),
      competition: t.volume === "high" ? "high" : t.volume === "medium" ? "medium" : "low",
    }));

  return processed;
}

function pickTopTags(
  tags: Hashtag[],
  category: TagCategory,
  count: number
): Hashtag[] {
  const filtered = tags.filter((t) => t.category === category);

  // Sort by score descending, then shuffle slightly for variety
  const sorted = filtered.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return Math.random() - 0.5;
  });

  return sorted.slice(0, count);
}

export function generateHashtags(
  keyword: string,
  platforms: Platform[],
  title?: string
): { platform: Platform; groups: HashtagGroup[]; aiNote: string }[] {
  const searchTerm = `${keyword} ${title || ""}`.trim();
  const niche = findNiche(searchTerm);

  // Get base tags
  let nicheTags: Omit<Hashtag, "score" | "category" | "competition">[] = [];
  const expansions = getSemanticExpansions(keyword);

  if (niche) {
    nicheTags = getTagsByNiche(niche);
  }

  // If no niche found, use generic tags
  if (nicheTags.length === 0) {
    nicheTags = genericHighVolumeTags;
  }

  const platformsToProcess = platforms.includes("all")
    ? ["instagram", "tiktok", "youtube"]
    : platforms;

  const results = platformsToProcess.map((platform) => {
    const platformStr = platform as Platform;
    const specificTags = platformSpecificTags[platformStr] || [];
    const allTags = [...nicheTags, ...genericHighVolumeTags, ...specificTags];

    // Add semantic expansion tags
    for (const exp of expansions) {
      const expTag = allTags.find(
        (t) => t.tag.toLowerCase() === exp.toLowerCase()
      );
      if (!expTag) {
        allTags.push({
          tag: exp,
          platform: [platformStr],
          volume: "medium",
        });
      }
    }

    // Remove duplicates
    const uniqueTags = Array.from(
      new Map(allTags.map((t) => [t.tag, t])).values()
    );

    const processedTags = filterTagsByPlatform(uniqueTags, platformStr, keyword);

    // Shuffle for variety
    const shuffled = shuffleArray(processedTags);

    // Get max tags for platform
    const tabInfo = platformTabs.find((t) => t.id === platformStr);
    const maxTags = tabInfo?.maxTags || 15;

    // Distribute tags across categories
    const viralCount = Math.ceil(maxTags * 0.25); // 25% viral
    const balancedCount = Math.ceil(maxTags * 0.35); // 35% balanced
    const nicheCount = Math.ceil(maxTags * 0.25); // 25% niche
    const longTailCount = maxTags - viralCount - balancedCount - nicheCount; // rest long-tail

    const viralTags = pickTopTags(shuffled, "viral", viralCount);
    const balancedTags = pickTopTags(shuffled, "balanced", balancedCount);
    const nicheTagsFiltered = pickTopTags(shuffled, "niche", nicheCount);
    const longTailTags = pickTopTags(shuffled, "long-tail", longTailCount);

    const groups: HashtagGroup[] = [
      {
        category: "viral",
        title: "Viral Tags",
        description: "Hashtag volume tinggi untuk jangkauan maksimal",
        hashtags: viralTags,
      },
      {
        category: "balanced",
        title: "Balanced Tags",
        description: "Kombinasi volume tinggi dan menengah",
        hashtags: balancedTags,
      },
      {
        category: "niche",
        title: "Niche Tags",
        description: "Lebih spesifik dengan kompetisi lebih rendah",
        hashtags: nicheTagsFiltered,
      },
      {
        category: "long-tail",
        title: "Long-tail Tags",
        description: "Hashtag sangat spesifik untuk audiens target",
        hashtags: longTailTags,
      },
    ];

    // Remove empty groups
    const nonEmptyGroups = groups.filter((g) => g.hashtags.length > 0);

    return {
      platform: platformStr,
      groups: nonEmptyGroups,
      aiNote: generateAiNote(platformStr, keyword),
    };
  });

  return results;
}

export function copyHashtags(
  tags: Hashtag[],
  format: "all" | "viral" | "balanced" | "niche" | "long-tail" = "all"
): string {
  let filtered: Hashtag[];

  if (format === "all") {
    filtered = tags;
  } else {
    filtered = tags.filter((t) => t.category === format);
  }

  return filtered
    .map((t) => `#${t.tag}`)
    .join(" ");
}

export function exportToTxt(results: { platform: string; groups: HashtagGroup[] }[], keyword: string): string {
  let content = `Hashtag Finder Pro - Export Results\n`;
  content += `Keyword: ${keyword}\n`;
  content += `Generated: ${new Date().toLocaleDateString("id-ID")}\n`;
  content += `${"=".repeat(50)}\n\n`;

  for (const result of results) {
    content += `Platform: ${result.platform.toUpperCase()}\n`;
    content += `${"-".repeat(30)}\n`;

    for (const group of result.groups) {
      content += `\n${group.title}:\n`;
      content += group.hashtags.map((h) => `#${h.tag}`).join(" ");
      content += "\n";
    }

    content += `\n${"=".repeat(50)}\n\n`;
  }

  return content;
}