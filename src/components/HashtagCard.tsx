"use client";

import { Hashtag } from "@/types";
import QualityScore from "./QualityScore";
import { useState } from "react";

interface HashtagCardProps {
  hashtag: Hashtag;
  onCopy: (tag: string) => void;
}

export default function HashtagCard({ hashtag, onCopy }: HashtagCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy(hashtag.tag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCompetitionColor = (competition: string) => {
    switch (competition) {
      case "high": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case "medium": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "low": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
    }
  };

  const getCompetitionLabel = (competition: string) => {
    switch (competition) {
      case "high": return "High Competition";
      case "medium": return "Medium Competition";
      case "low": return "Low Competition";
    }
  };

  return (
    <div className="group flex items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white p-3 transition-all hover:border-primary/30 hover:shadow-sm dark:border-gray-700 dark:bg-dark-surface">
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-text dark:text-white">
            #{hashtag.tag}
          </span>
          <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${getCompetitionColor(hashtag.competition)}`}
          >
            {getCompetitionLabel(hashtag.competition)}
          </span>
        </div>
        <QualityScore score={hashtag.score} />
      </div>
      <button
        onClick={handleCopy}
        aria-label={`Copy hashtag #${hashtag.tag}`}
        className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
          copied
            ? "bg-success text-white"
            : "bg-gray-100 text-gray-600 hover:bg-primary hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary"
        }`}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}