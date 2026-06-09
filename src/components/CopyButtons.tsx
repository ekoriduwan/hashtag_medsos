"use client";

import { HashtagGroup } from "@/types";
import { copyHashtags } from "@/lib/hashtag-engine";
import { useState } from "react";

interface CopyButtonsProps {
  groups: HashtagGroup[];
  onExportTxt: () => void;
}

export default function CopyButtons({ groups, onExportTxt }: CopyButtonsProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const allHashtags = groups.flatMap((g) => g.hashtags);

  const handleCopy = (type: "all" | "viral" | "balanced" | "niche" | "long-tail") => {
    const text = copyHashtags(allHashtags, type);
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const buttons = [
    { type: "all" as const, label: "Copy All", color: "bg-primary hover:bg-indigo-600" },
    { type: "viral" as const, label: "Copy Viral", color: "bg-red-500 hover:bg-red-600" },
    { type: "balanced" as const, label: "Copy Balanced", color: "bg-blue-500 hover:bg-blue-600" },
    { type: "niche" as const, label: "Copy Niche", color: "bg-green-500 hover:bg-green-600" },
    { type: "long-tail" as const, label: "Copy Long-tail", color: "bg-purple-500 hover:bg-purple-600" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {buttons.map((btn) => {
        const isCopied = copiedType === btn.type;
        return (
          <button
            key={btn.type}
            onClick={() => handleCopy(btn.type)}
            className={`rounded-lg px-4 py-2 text-xs font-medium text-white shadow-sm transition-all active:scale-95 ${
              isCopied ? "bg-success" : btn.color
            }`}
          >
            {isCopied ? "✓ Copied!" : btn.label}
          </button>
        );
      })}
      <button
        onClick={onExportTxt}
        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-100 active:scale-95 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
      >
        Export TXT
      </button>
    </div>
  );
}