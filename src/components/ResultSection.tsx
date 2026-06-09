"use client";

import { useState } from "react";
import { HashtagGroup, Platform } from "@/types";
import HashtagGroupComponent from "./HashtagGroup";
import CopyButtons from "./CopyButtons";
import { exportToTxt } from "@/lib/hashtag-engine";

interface ResultSectionProps {
  results: {
    platform: Platform;
    groups: HashtagGroup[];
    aiNote: string;
  }[];
  keyword: string;
  onCopyTag: (tag: string) => void;
}

export default function ResultSection({ results, keyword, onCopyTag }: ResultSectionProps) {
  const [activeTab, setActiveTab] = useState<Platform>(results[0]?.platform || "instagram");

  const activeResult = results.find((r) => r.platform === activeTab);
  if (!activeResult) return null;

  const handleCopyGroup = (tags: string[]) => {
    const text = tags.map((t) => `#${t}`).join(" ");
    navigator.clipboard.writeText(text);
  };

  const handleExportTxt = () => {
    const text = exportToTxt(results, keyword);
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hashtag-${keyword.replace(/\s+/g, "-")}-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const tabIcons: Record<string, string> = {
    youtube: "▶️",
    tiktok: "🎵",
    instagram: "📸",
  };

  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* Tabs */}
      <div className="mb-6 flex gap-1 rounded-xl bg-surface p-1 dark:bg-dark-surface">
        {results.map((result) => (
          <button
            key={result.platform}
            onClick={() => setActiveTab(result.platform)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
              activeTab === result.platform
                ? "bg-white text-primary shadow-sm dark:bg-gray-700 dark:text-white"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
            }`}
          >
            <span>{tabIcons[result.platform]}</span>
            <span className="hidden sm:inline">
              {result.platform.charAt(0).toUpperCase() + result.platform.slice(1)}
            </span>
          </button>
        ))}
      </div>

      {/* Copy Buttons */}
      <div className="mb-6">
        <CopyButtons groups={activeResult.groups} onExportTxt={handleExportTxt} />
      </div>

      {/* Hashtag Groups */}
      <div className="space-y-4">
        {activeResult.groups.map((group) => (
          <HashtagGroupComponent
            key={group.category}
            group={group}
            onCopyTag={onCopyTag}
            onCopyGroup={handleCopyGroup}
          />
        ))}
      </div>

      {/* AI Recommendation Note */}
      {activeResult.aiNote && (
        <div className="mt-6 rounded-lg border border-primary/20 bg-primary/5 p-4 dark:border-primary/30 dark:bg-primary/10">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-lg">💡</span>
            <div>
              <h4 className="text-sm font-semibold text-primary">
                AI Recommendation
              </h4>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                {activeResult.aiNote}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}