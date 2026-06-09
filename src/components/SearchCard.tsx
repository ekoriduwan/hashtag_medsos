"use client";

import { useState } from "react";
import { Platform, HashtagLanguage, languageOptions } from "@/types";
import { YoutubeIcon, TiktokIcon, InstagramIcon, GlobeIcon } from "./PlatformIcons";

interface SearchCardProps {
  onGenerate: (keyword: string, platforms: Platform[], title: string, language: HashtagLanguage | "all") => void;
  isLoading: boolean;
}

const platformOptions: { id: Platform; label: string; icon: React.ReactNode }[] = [
  { id: "youtube", label: "YouTube", icon: <YoutubeIcon className="h-4 w-4" /> },
  { id: "tiktok", label: "TikTok", icon: <TiktokIcon className="h-4 w-4" /> },
  { id: "instagram", label: "Instagram", icon: <InstagramIcon className="h-4 w-4" /> },
  { id: "all", label: "Semua Platform", icon: <GlobeIcon className="h-4 w-4" /> },
];

export default function SearchCard({ onGenerate, isLoading }: SearchCardProps) {
  const [keyword, setKeyword] = useState("");
  const [title, setTitle] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<HashtagLanguage | "all">("all");

  const togglePlatform = (platform: Platform) => {
    if (platform === "all") {
      if (selectedPlatforms.includes("all")) {
        setSelectedPlatforms([]);
      } else {
        setSelectedPlatforms(["all"]);
      }
      return;
    }

    let newSelection = selectedPlatforms.filter((p) => p !== "all");

    if (newSelection.includes(platform)) {
      newSelection = newSelection.filter((p) => p !== platform);
    } else {
      newSelection = [...newSelection, platform];
    }

    setSelectedPlatforms(newSelection);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword.trim()) return;
    if (selectedPlatforms.length === 0) return;
    onGenerate(keyword.trim(), selectedPlatforms, title.trim(), selectedLanguage);
  };

  const isValid = keyword.trim().length > 0 && selectedPlatforms.length > 0;

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-2xl rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-dark-surface"
    >
      {/* Keyword Input */}
      <div className="mb-5">
        <label
          htmlFor="keyword"
          className="mb-1.5 block text-sm font-medium text-text dark:text-white"
        >
          Keyword / Niche
        </label>
        <input
          id="keyword"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Contoh: lari marathon, tips investasi pemula, skincare routine..."
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-text placeholder-gray-400 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
          disabled={isLoading}
        />
      </div>

      {/* Title Input (Optional) */}
      <div className="mb-5">
        <label
          htmlFor="title"
          className="mb-1.5 block text-sm font-medium text-text dark:text-white"
        >
          Judul Konten <span className="text-gray-400">(opsional)</span>
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Contoh: Cara Memulai Investasi Saham untuk Pemula"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-text placeholder-gray-400 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
          disabled={isLoading}
        />
      </div>

      {/* Two columns: Platform + Language */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Platform Selector */}
        <div>
          <label className="mb-2 block text-sm font-medium text-text dark:text-white">
            Pilih Platform
          </label>
          <div className="flex flex-wrap gap-2">
            {platformOptions.map((platform) => {
              const isSelected = selectedPlatforms.includes(platform.id);
              return (
                <button
                  key={platform.id}
                  type="button"
                  onClick={() => togglePlatform(platform.id)}
                  disabled={isLoading}
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-all ${
                    isSelected
                      ? "border-primary bg-primary/10 text-primary dark:bg-primary/20"
                      : "border-gray-300 bg-white text-gray-600 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
                  } ${isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                >
                  {platform.icon}
                  {platform.label}
                </button>
              );
            })}
          </div>
          {selectedPlatforms.length === 0 && (
            <p className="mt-1.5 text-xs text-red-500">
              Pilih minimal satu platform
            </p>
          )}
        </div>

        {/* Language Selector */}
        <div>
          <label className="mb-2 block text-sm font-medium text-text dark:text-white">
            Bahasa Hashtag
          </label>
          <div className="flex flex-wrap gap-2">
            {languageOptions.map((lang) => {
              const isSelected = selectedLanguage === lang.id;
              return (
                <button
                  key={lang.id}
                  type="button"
                  onClick={() => setSelectedLanguage(lang.id)}
                  disabled={isLoading}
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium transition-all ${
                    isSelected
                      ? "border-secondary bg-secondary/10 text-secondary dark:bg-secondary/20"
                      : "border-gray-300 bg-white text-gray-600 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
                  } ${isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                >
                  {lang.label === "English" ? "🇬🇧" : lang.label === "Bahasa Indonesia" ? "🇮🇩" : lang.label === "Bahasa Lainnya" ? "🌍" : "🌐"}
                  <span>{lang.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <button
        type="submit"
        disabled={!isValid || isLoading}
        className={`flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all ${
          isValid && !isLoading
            ? "bg-primary hover:bg-indigo-600 active:scale-[0.98]"
            : "cursor-not-allowed bg-gray-300 dark:bg-gray-700"
        }`}
      >
        {isLoading ? (
          <>
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Menganalisis...
          </>
        ) : (
          <>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Generate Hashtag
          </>
        )}
      </button>
    </form>
  );
}