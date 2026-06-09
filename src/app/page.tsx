"use client";

import { useState } from "react";
import { Platform, HashtagGroup, HashtagLanguage } from "@/types";
import SearchCard from "@/components/SearchCard";
import ResultSection from "@/components/ResultSection";
import ThemeToggle from "@/components/ThemeToggle";

interface Result {
  platform: Platform;
  groups: HashtagGroup[];
  aiNote: string;
}

interface ApiResponse {
  success: boolean;
  keyword: string;
  results: Result[];
  generatedAt: string;
}

export default function Home() {
  const [results, setResults] = useState<Result[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [keyword, setKeyword] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleGenerate = async (kw: string, platforms: Platform[], title: string, language: HashtagLanguage | "all") => {
    setIsLoading(true);
    setError(null);
    setKeyword(kw);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          keyword: kw,
          platforms,
          title: title || undefined,
          language: language !== "all" ? language : undefined,
        }),
      });

      const data: ApiResponse = await response.json();

      if (!data.success) {
        throw new Error("Failed to generate hashtags");
      }

      setResults(data.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyTag = async (tag: string) => {
    try {
      await navigator.clipboard.writeText(`#${tag}`);
      showToast(`#${tag} copied!`);
    } catch {
      showToast(`#${tag} copied!`);
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#0F172A]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-[#0F172A]/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
              H
            </div>
            <span className="text-lg font-bold text-text dark:text-white">
              Hashtag Finder <span className="text-primary">Pro</span>
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 pb-8 pt-12 sm:px-6 sm:pt-16 lg:pt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-text dark:text-white sm:text-4xl lg:text-5xl">
              Temukan Hashtag Terbaik untuk{" "}
              <span className="text-primary">Kontenmu</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
              Generate hashtag yang relevan dan terbukti efektif untuk YouTube,
              TikTok, dan Instagram.
            </p>
          </div>
        </section>

        {/* Search Card */}
        <section className="px-4 pb-8 sm:px-6">
          <SearchCard onGenerate={handleGenerate} isLoading={isLoading} />
        </section>

        {/* Error Message */}
        {error && (
          <section className="px-4 pb-8 sm:px-6">
            <div className="mx-auto max-w-2xl rounded-lg border border-red-200 bg-red-50 p-4 text-center text-sm text-red-600 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
              {error}
            </div>
          </section>
        )}

        {/* Loading Skeleton */}
        {isLoading && (
          <section className="px-4 pb-16 sm:px-6">
            <div className="mx-auto max-w-4xl space-y-4">
              <div className="flex gap-1 rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-10 flex-1 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"
                  />
                ))}
              </div>

              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="h-5 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="h-8 w-20 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {[1, 2, 3, 4].map((j) => (
                      <div
                        key={j}
                        className="h-14 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Results */}
        {results && !isLoading && (
          <section className="px-4 pb-16 sm:px-6">
            <div className="mb-4 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Hasil untuk: <span className="font-semibold text-text dark:text-white">&ldquo;{keyword}&rdquo;</span>
              </p>
            </div>
            <ResultSection
              results={results}
              keyword={keyword}
              onCopyTag={handleCopyTag}
            />
          </section>
        )}

        {/* Empty State */}
        {!results && !isLoading && !error && (
          <section className="px-4 pb-16 sm:px-6">
            <div className="mx-auto max-w-sm text-center">
              <div className="mb-4 text-6xl">🔍</div>
              <h3 className="text-lg font-semibold text-text dark:text-white">
                Siap Mencari Hashtag?
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Masukkan keyword dan pilih platform untuk mendapatkan rekomendasi
                hashtag terbaik.
              </p>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-6 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4 text-center text-xs text-gray-400 sm:px-6">
          Hashtag Finder Pro &copy; {new Date().getFullYear()} &mdash; Built for Content Creators
        </div>
      </footer>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white shadow-lg dark:bg-gray-100 dark:text-gray-900">
          {toastMessage}
        </div>
      )}
    </div>
  );
}