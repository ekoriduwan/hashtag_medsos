"use client";

import { HashtagGroup as Group } from "@/types";
import HashtagCard from "./HashtagCard";

interface HashtagGroupProps {
  group: Group;
  onCopyTag: (tag: string) => void;
  onCopyGroup: (tags: string[]) => void;
}

export default function HashtagGroup({ group, onCopyTag, onCopyGroup }: HashtagGroupProps) {
  const getCategoryColor = () => {
    switch (group.category) {
      case "viral": return "border-l-red-500";
      case "balanced": return "border-l-blue-500";
      case "niche": return "border-l-green-500";
      case "long-tail": return "border-l-purple-500";
    }
  };

  const getCategoryIcon = () => {
    switch (group.category) {
      case "viral": return "🔥";
      case "balanced": return "⚖️";
      case "niche": return "🎯";
      case "long-tail": return "📌";
    }
  };

  return (
    <div className={`rounded-lg border border-gray-200 bg-surface dark:border-gray-700 dark:bg-dark-surface`}>
      <div className={`border-l-4 ${getCategoryColor()} rounded-t-lg p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">{getCategoryIcon()}</span>
            <div>
              <h3 className="text-sm font-semibold text-text dark:text-white">
                {group.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {group.description}
              </p>
            </div>
          </div>
          <button
            onClick={() => onCopyGroup(group.hashtags.map((h) => h.tag))}
            aria-label={`Copy all ${group.title} hashtags`}
            className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-primary shadow-sm transition-all hover:bg-primary hover:text-white dark:bg-gray-800 dark:hover:bg-primary"
          >
            Copy All
          </button>
        </div>
      </div>
      <div className="grid gap-2 p-4 pt-3 sm:grid-cols-2">
        {group.hashtags.map((hashtag) => (
          <HashtagCard
            key={hashtag.tag}
            hashtag={hashtag}
            onCopy={onCopyTag}
          />
        ))}
      </div>
    </div>
  );
}