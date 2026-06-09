import { QualityScore as QScore } from "@/types";

interface QualityScoreProps {
  score: QScore;
}

export default function QualityScore({ score }: QualityScoreProps) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`text-lg ${
          i <= score
            ? "text-yellow-400"
            : "text-gray-300 dark:text-gray-600"
        }`}
      >
        ★
      </span>
    );
  }

  const getLabel = (s: QScore): string => {
    switch (s) {
      case 5: return "Sangat Direkomendasikan";
      case 4: return "Baik";
      case 3: return "Cukup";
      case 2: return "Kurang";
      case 1: return "Rendah";
    }
  };

  const getColor = (s: QScore): string => {
    if (s >= 4) return "text-success";
    if (s >= 3) return "text-yellow-500";
    return "text-gray-400";
  };

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">{stars}</div>
      <span className={`text-xs font-medium ${getColor(score)}`}>
        {getLabel(score)}
      </span>
    </div>
  );
}