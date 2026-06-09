import { NextRequest, NextResponse } from "next/server";
import { generateHashtags } from "@/lib/hashtag-engine";
import { Platform, HashtagLanguage } from "@/types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { keyword, platforms, title, language } = body;

    if (!keyword || !keyword.trim()) {
      return NextResponse.json(
        { error: "Keyword is required" },
        { status: 400 }
      );
    }

    if (!platforms || !Array.isArray(platforms) || platforms.length === 0) {
      return NextResponse.json(
        { error: "At least one platform must be selected" },
        { status: 400 }
      );
    }

    const validPlatforms = platforms.filter((p: string) =>
      ["youtube", "tiktok", "instagram", "all"].includes(p)
    );

    if (validPlatforms.length === 0) {
      return NextResponse.json(
        { error: "Invalid platform selection" },
        { status: 400 }
      );
    }

    const validLanguage =
      language && ["id", "en", "other", "all"].includes(language)
        ? language
        : "all";

    // Simulate processing time for realistic UX (500ms-1.5s)
    const delay = Math.floor(Math.random() * 1000) + 500;
    await new Promise((resolve) => setTimeout(resolve, delay));

    const results = generateHashtags(
      keyword.trim(),
      validPlatforms as Platform[],
      title?.trim(),
      validLanguage as HashtagLanguage | "all"
    );

    return NextResponse.json({
      success: true,
      keyword: keyword.trim(),
      results,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Generate error:", error);
    return NextResponse.json(
      { error: "Failed to generate hashtags" },
      { status: 500 }
    );
  }
}