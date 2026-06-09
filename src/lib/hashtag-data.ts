import { Hashtag, Platform } from "@/types";

// Simulated trend score for 7 days (higher = more trending)
function t7(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

// Simulated trend score for 30 days
function t30(low: number, high: number): number {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

interface NicheEntry {
  keywords: string[];
  tags: Omit<Hashtag, "score" | "category" | "competition">[];
  expansions: string[];
}

const nicheDatabase: Record<string, NicheEntry> = {
  fitness: {
    keywords: ["fitness", "gym", "workout", "exercise", "fit", "training", "bodybuilding", "weightlifting", "crossfit", "cardio", "calisthenics", "pilates"],
    tags: [
      { tag: "fitness", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(90,99) },
      { tag: "gym", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "workout", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,94), trend30: t7(88,96) },
      { tag: "fitnessmotivation", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,85), trend30: t7(75,88) },
      { tag: "gymlife", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,70) },
      { tag: "fitfam", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(65,80), trend30: t7(70,82) },
      { tag: "bodybuilding", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "weightlossjourney", platform: ["instagram", "tiktok"], volume: "very-high", trend7: t7(80,92), trend30: t7(85,95) },
      { tag: "healthylifestyle", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(72,88), trend30: t7(78,90) },
      { tag: "nutrition", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "personaltrainer", platform: ["instagram"], volume: "medium", trend7: t7(35,50), trend30: t7(40,55) },
      { tag: "hiit", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
      { tag: "yoga", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,80), trend30: t7(70,85) },
      { tag: "cardio", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "strengthtraining", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "homeworkout", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(65,80), trend30: t7(70,82) },
      { tag: "fatloss", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,70) },
      { tag: "musclebuilding", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,58), trend30: t7(50,62) },
      { tag: "running", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,82), trend30: t7(72,85) },
      { tag: "planks", platform: ["instagram", "tiktok"], volume: "low", trend7: t7(25,40), trend30: t7(30,45) },
      { tag: "squatchallenge", platform: ["tiktok", "instagram"], volume: "medium", trend7: t7(45,65), trend30: t7(50,68) },
      { tag: "gymmotivation", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,85), trend30: t7(75,88) },
      { tag: "physique", platform: ["instagram"], volume: "low", trend7: t7(20,35), trend30: t7(25,40) },
      { tag: "fitnesstips", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,75) },
      { tag: "exerciseroutine", platform: ["youtube", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "flexibility", platform: ["instagram", "youtube"], volume: "low", trend7: t7(25,40), trend30: t7(30,45) },
      { tag: "transformation", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(72,88), trend30: t7(78,90) },
      { tag: "coreworkout", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "legday", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,68), trend30: t7(55,70) },
      { tag: "shoulderworkout", platform: ["instagram", "youtube"], volume: "low", trend7: t7(30,45), trend30: t7(35,50) },
      { tag: "pilates", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "calisthenics", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
      { tag: "preworkout", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "recovery", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
      { tag: "functional training", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
    ],
    expansions: ["exercise", "training", "weightlifting", "cardio", "strength", "endurance", "mobility", "wellness", "active", "health", "calisthenics", "pilates", "recovery"],
  },
  running: {
    keywords: ["running", "marathon", "run", "jogging", "sprint", "trailrun", "halfmarathon", "ultra"],
    tags: [
      { tag: "running", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,95), trend30: t7(88,97) },
      { tag: "marathon", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,85), trend30: t7(75,88) },
      { tag: "runnersofinstagram", platform: ["instagram"], volume: "high", trend7: t7(65,80), trend30: t7(70,82) },
      { tag: "runner", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,92), trend30: t7(85,94) },
      { tag: "runningmotivation", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(55,70), trend30: t7(60,75) },
      { tag: "marathontraining", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,68), trend30: t7(55,72) },
      { tag: "runninglife", platform: ["instagram"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "runnerscommunity", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,58), trend30: t7(50,62) },
      { tag: "trailrunning", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "ultramarathon", platform: ["instagram", "youtube"], volume: "low", trend7: t7(25,40), trend30: t7(30,45) },
      { tag: "runningtips", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "runclub", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,65), trend30: t7(50,68) },
      { tag: "halfmarathon", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(65,80), trend30: t7(70,82) },
      { tag: "runninggear", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,58), trend30: t7(50,62) },
      { tag: "pace", platform: ["instagram"], volume: "low", trend7: t7(20,35), trend30: t7(25,40) },
      { tag: "runningform", platform: ["youtube", "tiktok"], volume: "low", trend7: t7(25,40), trend30: t7(30,45) },
      { tag: "morningrun", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "runstreak", platform: ["instagram"], volume: "low", trend7: t7(20,35), trend30: t7(25,40) },
      { tag: "5krun", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(60,78), trend30: t7(65,80) },
      { tag: "10krun", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "runchallenge", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "parkrun", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
    ],
    expansions: ["endurance", "cardio", "fitness", "speed", "race", "jog", "sprint", "trail", "track", "stamina", "marathoner"],
  },
  investment: {
    keywords: ["investasi", "saham", "investing", "stock", "trading", "finance", "wealth", "crypto", "forex", "indexfund", "realestate"],
    tags: [
      { tag: "investasi", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(85,97) },
      { tag: "investing", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "saham", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(72,88), trend30: t7(75,90) },
      { tag: "stockmarket", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "financialfreedom", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(88,98) },
      { tag: "investor", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "wealth", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "crypto", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(78,92) },
      { tag: "trading", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "finance", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(88,98) },
      { tag: "bitcoin", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(72,90), trend30: t7(68,85) },
      { tag: "forex", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "passiveincome", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,95), trend30: t7(88,97) },
      { tag: "dividen", platform: ["instagram"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
      { tag: "reksadana", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "financialliteracy", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,75) },
      { tag: "investasipemula", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,68), trend30: t7(55,72) },
      { tag: "cryptocurrency", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,82), trend30: t7(62,78) },
      { tag: "earnmoney", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "financialgoals", platform: ["instagram"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "stocktips", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,68), trend30: t7(55,72) },
      { tag: "investingforbeginners", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "sahamindonesia", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,62), trend30: t7(50,65) },
      { tag: "belajarinvestasi", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,68), trend30: t7(55,70) },
      { tag: "investmenttips", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "indexfund", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
      { tag: "realestateinvesting", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "compounding", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
      { tag: "portfoliodiversification", platform: ["instagram", "youtube"], volume: "low", trend7: t7(25,40), trend30: t7(30,45) },
    ],
    expansions: ["money", "wealth", "finance", "trading", "economy", "profit", "asset", "portfolio", "capital", "market", "index", "dividen", "compound"],
  },
  travel: {
    keywords: ["travel", "trip", "holiday", "vacation", "wanderlust", "backpacking", "tourism", "explore", "digitalnomad"],
    tags: [
      { tag: "travel", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(88,99), trend30: t7(90,99) },
      { tag: "wanderlust", platform: ["instagram", "tiktok"], volume: "very-high", trend7: t7(82,95), trend30: t7(88,97) },
      { tag: "travelgram", platform: ["instagram"], volume: "high", trend7: t7(72,88), trend30: t7(78,90) },
      { tag: "trip", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "explore", platform: ["instagram", "tiktok"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "adventure", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "vacation", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "holiday", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,72), trend30: t7(60,75) },
      { tag: "backpacking", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(50,68), trend30: t7(55,72) },
      { tag: "solotravel", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "travelphotography", platform: ["instagram"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "roadtrip", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "nature", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "beach", platform: ["instagram", "tiktok"], volume: "very-high", trend7: t7(82,96), trend30: t7(88,98) },
      { tag: "mountains", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(55,72), trend30: t7(60,75) },
      { tag: "travelblogger", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "travelguide", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "hiddengems", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,70), trend30: t7(55,72) },
      { tag: "travelreels", platform: ["instagram"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "budgettravel", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,72), trend30: t7(60,75) },
      { tag: "digitalnomad", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "slowtravel", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
      { tag: "localexperience", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "sustainabletravel", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
    ],
    expansions: ["explore", "adventure", "nature", "culture", "destination", "journey", "tourism", "getaway", "excursion", "expedition", "nomad"],
  },
  food: {
    keywords: ["food", "cooking", "recipe", "makanan", "masakan", "kuliner", "baking", "delicious", "mealprep", "streetfood"],
    tags: [
      { tag: "food", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(90,99), trend30: t7(92,99) },
      { tag: "foodie", platform: ["instagram", "tiktok"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "cooking", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(88,98) },
      { tag: "recipe", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "delicious", platform: ["instagram", "tiktok"], volume: "very-high", trend7: t7(82,95), trend30: t7(88,97) },
      { tag: "homemade", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,72), trend30: t7(60,75) },
      { tag: "baking", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "instafood", platform: ["instagram"], volume: "high", trend7: t7(65,80), trend30: t7(70,82) },
      { tag: "foodphotography", platform: ["instagram"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "yummy", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(70,85), trend30: t7(75,88) },
      { tag: "healthyfood", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "comfortfood", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "dinner", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(65,80), trend30: t7(70,82) },
      { tag: "breakfast", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(68,82), trend30: t7(72,85) },
      { tag: "lunch", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "foodblogger", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "easyrecipe", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "vegetarian", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "vegan", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,80), trend30: t7(70,82) },
      { tag: "chef", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "kuliner", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(72,88), trend30: t7(75,90) },
      { tag: "masakanrumahan", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "makananenak", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "resepmasakan", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,68), trend30: t7(55,70) },
      { tag: "mealprep", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "streetfood", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "foodstyling", platform: ["instagram"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
      { tag: "foodreels", platform: ["instagram"], volume: "high", trend7: t7(65,80), trend30: t7(70,83) },
    ],
    expansions: ["cuisine", "gourmet", "taste", "flavor", "ingredient", "kitchen", "mealprep", "snack", "dessert", "appetizer", "streetfood"],
  },
  technology: {
    keywords: ["tech", "technology", "gadget", "digital", "coding", "programming", "software", "ai", "artificialintelligence", "startup"],
    tags: [
      { tag: "technology", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "tech", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(88,99), trend30: t7(90,99) },
      { tag: "coding", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "programming", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(72,88), trend30: t7(78,90) },
      { tag: "developer", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "ai", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(92,99), trend30: t7(88,98) },
      { tag: "artificialintelligence", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(88,99), trend30: t7(85,98) },
      { tag: "startup", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "gadget", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "innovation", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,75) },
      { tag: "software", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "webdev", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,75) },
      { tag: "machinelearning", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(68,85) },
      { tag: "cybersecurity", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "robotics", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "technews", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,70) },
      { tag: "programmingmemes", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "devlife", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "opensource", platform: ["instagram", "youtube"], volume: "low", trend7: t7(30,45), trend30: t7(35,50) },
      { tag: "javascript", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "python", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,95), trend30: t7(85,97) },
      { tag: "reactjs", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,68), trend30: t7(55,72) },
      { tag: "chatgpt", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(90,99), trend30: t7(85,98) },
      { tag: "promptengineering", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(65,82) },
    ],
    expansions: ["digital", "innovation", "software", "hardware", "future", "smart", "automation", "data", "cloud", "blockchain", "ai", "machinelearning"],
  },
  fashion: {
    keywords: ["fashion", "style", "outfit", "ootd", "fashionista", "streetwear", "vintage", "modestfashion"],
    tags: [
      { tag: "fashion", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(88,99), trend30: t7(90,99) },
      { tag: "style", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "ootd", platform: ["instagram", "tiktok"], volume: "very-high", trend7: t7(82,95), trend30: t7(85,97) },
      { tag: "outfit", platform: ["instagram", "tiktok"], volume: "very-high", trend7: t7(82,96), trend30: t7(85,97) },
      { tag: "fashionblogger", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(68,82), trend30: t7(72,85) },
      { tag: "streetwear", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "modestfashion", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,68), trend30: t7(55,72) },
      { tag: "vintage", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "fashioninspo", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "grwm", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(82,95) },
      { tag: "outfitideas", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "fashionista", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "sneakers", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "luxury", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "shopaholic", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "styleinspo", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "fashiontrends", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "wardrobe", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "thrift", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,68), trend30: t7(55,72) },
      { tag: "hijabfashion", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "hijabstyle", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "muslimahfashion", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "minimaliststyle", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(65,80), trend30: t7(70,82) },
    ],
    expansions: ["trend", "wardrobe", "apparel", "couture", "accessories", "jewelry", "handbag", "shoe", "dress", "tailor", "minimalist"],
  },
  photography: {
    keywords: ["photography", "photo", "photoshoot", "camera", "photographer", "portrait", "landscape"],
    tags: [
      { tag: "photography", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "photooftheday", platform: ["instagram"], volume: "high", trend7: t7(70,85), trend30: t7(75,88) },
      { tag: "photographer", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "portrait", platform: ["instagram"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "landscape", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "camera", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "photoshoot", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "naturephotography", platform: ["instagram"], volume: "high", trend7: t7(65,80), trend30: t7(70,82) },
      { tag: "streetphotography", platform: ["instagram"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "travelphotography", platform: ["instagram"], volume: "high", trend7: t7(70,85), trend30: t7(75,88) },
      { tag: "photographytips", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "portraitphotography", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "dslr", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
      { tag: "sonyalpha", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "canon", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "lightroom", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "photographyideas", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "goldenhour", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "editing", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,75) },
      { tag: "presets", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,68), trend30: t7(55,70) },
    ],
    expansions: ["camera", "lens", "edit", "composition", "exposure", "aperture", "shutter", "iso", "flash", "studio", "presets"],
  },
  music: {
    keywords: ["music", "song", "musician", "singer", "guitar", "piano", "producer", "beat", "rapper"],
    tags: [
      { tag: "music", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(88,99), trend30: t7(90,99) },
      { tag: "musician", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "singer", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,95), trend30: t7(85,97) },
      { tag: "song", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "guitar", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,85), trend30: t7(75,88) },
      { tag: "piano", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "producer", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "beat", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "rapper", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "songwriter", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "musicproduction", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "vocals", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "hiphop", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "rock", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "jazz", platform: ["instagram", "youtube"], volume: "low", trend7: t7(30,45), trend30: t7(35,50) },
      { tag: "edm", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "livemusic", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,80), trend30: t7(70,85) },
      { tag: "acoustic", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "musicvideo", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "cover", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,85), trend30: t7(75,88) },
      { tag: "newmusic", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "indiemusic", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
    ],
    expansions: ["audio", "melody", "rhythm", "harmony", "instrument", "band", "concert", "album", "single", "track", "indie"],
  },
  education: {
    keywords: ["education", "learning", "study", "school", "university", "course", "lecture", "tutorial", "learn"],
    tags: [
      { tag: "education", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(88,98) },
      { tag: "learning", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "study", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "studytips", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,72), trend30: t7(60,75) },
      { tag: "university", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "student", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "course", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "tutorial", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,95), trend30: t7(85,97) },
      { tag: "onlinelearning", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "studygram", platform: ["instagram"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "studywithme", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "exams", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,68), trend30: t7(55,72) },
      { tag: "math", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "science", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "history", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "languagelearning", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "productivity", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,95), trend30: t7(85,97) },
      { tag: "motivation", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "knowledge", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "skill", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "belajar", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(72,88), trend30: t7(75,90) },
      { tag: "sekolah", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "kuliah", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
    ],
    expansions: ["knowledge", "skill", "academic", "research", "teach", "class", "lesson", "curriculum", "degree", "certificate", "belajar"],
  },
  business: {
    keywords: ["business", "entrepreneur", "marketing", "startup", "bisnis", "wirausaha", "branding", "digitalmarketing"],
    tags: [
      { tag: "business", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "entrepreneur", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(88,98) },
      { tag: "marketing", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "startup", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "bisnis", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(72,88), trend30: t7(75,90) },
      { tag: "digitalmarketing", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(85,97) },
      { tag: "branding", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "success", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "motivation", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "leadership", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "sales", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "ecommerce", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "socialmedia", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "wirausaha", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,72), trend30: t7(60,75) },
      { tag: "entrepreneurindonesia", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "smallbusiness", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "onlineshop", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "businessowner", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "startupindonesia", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "tipsbisnis", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,68), trend30: t7(55,70) },
      { tag: "seo", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "socialmediamarketing", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "contentmarketing", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
    ],
    expansions: ["strategy", "growth", "revenue", "profit", "innovation", "management", "networking", "pitch", "funding", "scale", "seo", "ads"],
  },
  beauty: {
    keywords: ["beauty", "makeup", "skincare", "cosmetic", "tutorialmakeup", "beautytips", "glowup"],
    tags: [
      { tag: "beauty", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "makeup", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "skincare", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(85,97) },
      { tag: "beautytips", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "makeuptutorial", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(72,88), trend30: t7(75,90) },
      { tag: "skincareroutine", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(85,97) },
      { tag: "glowup", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(72,90), trend30: t7(75,92) },
      { tag: "cosmetic", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "beautyblogger", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(55,68), trend30: t7(60,72) },
      { tag: "makeupartist", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "nails", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "hair", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "selfcare", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(88,98) },
      { tag: "antiaging", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "eyeliner", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,68), trend30: t7(55,70) },
      { tag: "lipstick", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "foundation", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "cleanser", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "serum", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "moisturizer", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "sunscreen", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "lipgloss", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,68), trend30: t7(55,70) },
    ],
    expansions: ["cosmetic", "glow", "treatment", "organic", "natural", "veganbeauty", "crueltyfree", "facial", "bodycare", "fragrance", "sunscreen"],
  },
  gaming: {
    keywords: ["gaming", "game", "gamer", "playstation", "xbox", "nintendo", "esport", "mobilelegend", "pubg", "valorant"],
    tags: [
      { tag: "gaming", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(88,99), trend30: t7(90,99) },
      { tag: "gamer", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "game", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "playstation", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "xbox", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "nintendo", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,85), trend30: t7(75,88) },
      { tag: "esport", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "mobilelegend", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(82,95) },
      { tag: "pubg", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(72,88) },
      { tag: "valorant", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "fortnite", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(82,92) },
      { tag: "minecraft", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,95), trend30: t7(85,97) },
      { tag: "callofduty", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "streamer", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "twitch", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "gameplay", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "gamingcommunity", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "indiegame", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "retrogaming", platform: ["instagram", "youtube"], volume: "low", trend7: t7(30,45), trend30: t7(35,50) },
      { tag: "pcgaming", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "rpg", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "fps", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "mlbb", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(85,97) },
      { tag: "freefire", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(72,90), trend30: t7(75,92) },
      { tag: "genshinimpact", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
    ],
    expansions: ["console", "multiplayer", "online", "stream", "competition", "level", "achievement", "quest", "battle", "tournament", "mlbb"],
  },
  health: {
    keywords: ["health", "healthy", "wellness", "mentalhealth", "healthylifestyle", "selfcare", "healing", "kesehatan"],
    tags: [
      { tag: "health", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(88,99), trend30: t7(90,99) },
      { tag: "healthy", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "wellness", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(88,98) },
      { tag: "mentalhealth", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(88,99), trend30: t7(90,99) },
      { tag: "healthylifestyle", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,95), trend30: t7(85,97) },
      { tag: "selfcare", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(88,98) },
      { tag: "healing", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "mentalhealthmatters", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(72,88), trend30: t7(75,90) },
      { tag: "selflove", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(85,97) },
      { tag: "mindfulness", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "meditation", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "wellbeing", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "kesehatan", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,72), trend30: t7(60,75) },
      { tag: "hidupsehat", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "polahidupsehat", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "terapi", platform: ["instagram"], volume: "low", trend7: t7(30,45), trend30: t7(35,50) },
      { tag: "yoga", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "diet", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "immunity", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "sleep", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "theraphy", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "mentalhealthawareness", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
    ],
    expansions: ["wellbeing", "fitness", "nutrition", "doctor", "medical", "therapy", "recovery", "balance", "organic", "natural", "mentalhealth"],
  },
  // --- NEW NICHES ---
  islamic: {
    keywords: ["islam", "muslim", "quran", "doa", "hijrah", "sholat", "puasa", "ngaji", "islamic", "ramadhan", "sedekah"],
    tags: [
      { tag: "islam", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "islamic", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(88,98) },
      { tag: "muslim", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "quran", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(72,90), trend30: t7(78,92) },
      { tag: "doa", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "hijrah", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "sholat", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(55,72), trend30: t7(60,75) },
      { tag: "puasa", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "ngaji", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,68), trend30: t7(55,72) },
      { tag: "ramadhan", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(85,97) },
      { tag: "sedekah", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "islamicquotes", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "muslimah", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "hijab", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "alquran", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "dakwah", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,68), trend30: t7(55,72) },
      { tag: "istikharah", platform: ["instagram"], volume: "low", trend7: t7(25,40), trend30: t7(30,45) },
      { tag: "tahajud", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "subuh", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "jumat", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "murottal", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "kajian", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "islamindonesia", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
    ],
    expansions: ["islamic", "muslim", "quran", "doa", "hijrah", "ramadhan", "dakwah", "prayer", "faith"],
  },
  parenting: {
    keywords: ["parenting", "anak", "ibu", "keluarga", "baby", "momlife", "ayah", "parentingtips", "family"],
    tags: [
      { tag: "parenting", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "parentingtips", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(72,90), trend30: t7(78,92) },
      { tag: "momlife", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(85,97) },
      { tag: "dadlife", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "family", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "baby", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(85,97) },
      { tag: "anak", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(72,88), trend30: t7(75,90) },
      { tag: "ibu", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "ayah", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "keluarga", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "momsofinstagram", platform: ["instagram"], volume: "high", trend7: t7(65,80), trend30: t7(70,82) },
      { tag: "motherhood", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "fatherhood", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,68), trend30: t7(55,72) },
      { tag: "newmom", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(55,72), trend30: t7(60,75) },
      { tag: "newdad", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "toddler", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "preschool", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "parentingindonesia", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,68), trend30: t7(55,72) },
      { tag: "familytime", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "babygirl", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "babyboy", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(65,80), trend30: t7(70,82) },
      { tag: "pregnancy", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "kehamilan", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,72), trend30: t7(60,75) },
      { tag: "positiveparenting", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
    ],
    expansions: ["family", "baby", "child", "mother", "father", "toddler", "pregnancy", "parenting", "educationchild"],
  },
  automotive: {
    keywords: ["motor", "mobil", "otomotif", "modifikasi", "riding", "automotive", "car", "bike", "motorcycle"],
    tags: [
      { tag: "automotive", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "car", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "bike", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(72,90), trend30: t7(78,92) },
      { tag: "motor", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "mobil", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "otomotif", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "modifikasi", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "riding", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "motorcycle", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "carlover", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "bikelover", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "reviewmobil", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "reviewmotor", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "supercar", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "hypercar", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "motovlog", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "cars", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(85,97) },
      { tag: "bikes", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "toyota", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "honda", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "yamaha", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "bmw", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "mercedes", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "offroad", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "carreview", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
    ],
    expansions: ["car", "bike", "motorcycle", "truck", "suv", "sedan", "supercar", "offroad", "racing", "modification"],
  },
  crypto: {
    keywords: ["crypto", "blockchain", "nft", "web3", "metaverse", "defi", "bitcoin", "ethereum", "cryptocurrency"],
    tags: [
      { tag: "crypto", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,92), trend30: t7(75,88) },
      { tag: "blockchain", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(78,92), trend30: t7(75,88) },
      { tag: "nft", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,80), trend30: t7(60,75) },
      { tag: "web3", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(65,80) },
      { tag: "metaverse", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,80), trend30: t7(60,75) },
      { tag: "defi", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(42,55) },
      { tag: "bitcoin", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(78,92), trend30: t7(72,85) },
      { tag: "ethereum", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,82), trend30: t7(62,78) },
      { tag: "cryptocurrency", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,85), trend30: t7(65,80) },
      { tag: "altcoin", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(45,60) },
      { tag: "solana", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(62,78) },
      { tag: "polygon", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(40,55) },
      { tag: "cryptotrading", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,82), trend30: t7(60,75) },
      { tag: "cryptonews", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(50,65) },
      { tag: "btc", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(75,88) },
      { tag: "eth", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(62,78) },
      { tag: "nftart", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(45,60) },
      { tag: "binance", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,82), trend30: t7(60,75) },
      { tag: "coinbase", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(40,55) },
      { tag: "cryptominer", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(42,55) },
      { tag: "web3community", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(45,60) },
      { tag: "cryptoindonesia", platform: ["instagram", "tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(45,60) },
    ],
    expansions: ["crypto", "blockchain", "nft", "web3", "defi", "token", "mining", "wallet", "smartcontract", "dapp"],
  },
  digitalmarketing: {
    keywords: ["digitalmarketing", "seo", "ads", "contentmarketing", "socialmediamarketing", "emailmarketing", "funnels", "copywriting"],
    tags: [
      { tag: "digitalmarketing", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(85,97) },
      { tag: "seo", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
      { tag: "marketing", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
      { tag: "socialmediamarketing", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,95), trend30: t7(85,97) },
      { tag: "contentmarketing", platform: ["instagram", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "copywriting", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "emailmarketing", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "socialmedia", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(88,99), trend30: t7(90,99) },
      { tag: "branding", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
      { tag: "onlinemarketing", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(70,85), trend30: t7(72,88) },
      { tag: "facebookads", platform: ["instagram", "tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
      { tag: "googleads", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "instagrammarketing", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "tiktokmarketing", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(72,90), trend30: t7(75,92) },
      { tag: "youtubemarketing", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "affiliatemarketing", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,95), trend30: t7(85,97) },
      { tag: "influencermarketing", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
      { tag: "growthhacking", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "marketingstrategy", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
      { tag: "smallbusinesstips", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "digitalstrategist", platform: ["instagram"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
      { tag: "marketingtips", platform: ["instagram", "tiktok", "youtube"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
      { tag: "funnels", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
      { tag: "conversionoptimization", platform: ["instagram", "youtube"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
    ],
    expansions: ["seo", "ads", "funnels", "conversion", "analytics", "campaign", "socialmedia", "influencer", "affiliate", "growth"],
  },
};

// Generic high-volume hashtags (cross-niche)
export const genericHighVolumeTags: Omit<Hashtag, "score" | "category" | "competition">[] = [
  { tag: "viral", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(88,99), trend30: t7(90,99) },
  { tag: "trending", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
  { tag: "explorepage", platform: ["instagram"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
  { tag: "fyp", platform: ["tiktok"], volume: "very-high", trend7: t7(92,99), trend30: t7(90,99) },
  { tag: "foryoupage", platform: ["tiktok"], volume: "very-high", trend7: t7(90,99), trend30: t7(88,99) },
  { tag: "viralvideo", platform: ["tiktok", "youtube"], volume: "high", trend7: t7(75,90), trend30: t7(78,92) },
  { tag: "trend", platform: ["instagram", "tiktok"], volume: "very-high", trend7: t7(82,95), trend30: t7(85,97) },
  { tag: "contentcreator", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(82,96), trend30: t7(85,97) },
  { tag: "socialmedia", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
  { tag: "viralcontent", platform: ["instagram", "tiktok"], volume: "high", trend7: t7(75,90), trend30: t7(78,92) },
  { tag: "trendingvideo", platform: ["tiktok", "youtube"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
  { tag: "reels", platform: ["instagram"], volume: "very-high", trend7: t7(88,99), trend30: t7(90,99) },
  { tag: "instadaily", platform: ["instagram"], volume: "high", trend7: t7(70,85), trend30: t7(75,88) },
  { tag: "tiktokindonesia", platform: ["tiktok"], volume: "very-high", trend7: t7(82,95), trend30: t7(85,97) },
  { tag: "youtube", platform: ["youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
  { tag: "subscribe", platform: ["youtube"], volume: "high", trend7: t7(72,88), trend30: t7(75,90) },
  { tag: "youtuber", platform: ["youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
  { tag: "content", platform: ["instagram", "tiktok", "youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
];

// Platform-specific tags
export const platformSpecificTags: Record<string, Omit<Hashtag, "score" | "category" | "competition">[]> = {
  youtube: [
    { tag: "youtube", platform: ["youtube"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
    { tag: "subscribe", platform: ["youtube"], volume: "very-high", trend7: t7(82,95), trend30: t7(85,97) },
    { tag: "youtuber", platform: ["youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
    { tag: "video", platform: ["youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
    { tag: "vlog", platform: ["youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
    { tag: "tutorial", platform: ["youtube"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
    { tag: "howto", platform: ["youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
    { tag: "review", platform: ["youtube"], volume: "high", trend7: t7(65,82), trend30: t7(70,85) },
    { tag: "challenge", platform: ["youtube"], volume: "high", trend7: t7(65,80), trend30: t7(70,82) },
    { tag: "reaction", platform: ["youtube"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
    { tag: "unboxing", platform: ["youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
    { tag: "newvideo", platform: ["youtube"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
    { tag: "creator", platform: ["youtube"], volume: "high", trend7: t7(65,80), trend30: t7(70,82) },
    { tag: "subscribetomychannel", platform: ["youtube"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
    { tag: "tutorialyoutube", platform: ["youtube"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
  ],
  tiktok: [
    { tag: "fyp", platform: ["tiktok"], volume: "very-high", trend7: t7(92,99), trend30: t7(90,99) },
    { tag: "foryoupage", platform: ["tiktok"], volume: "very-high", trend7: t7(90,99), trend30: t7(88,99) },
    { tag: "tiktok", platform: ["tiktok"], volume: "very-high", trend7: t7(88,99), trend30: t7(90,99) },
    { tag: "viral", platform: ["tiktok"], volume: "very-high", trend7: t7(90,99), trend30: t7(88,99) },
    { tag: "trending", platform: ["tiktok"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
    { tag: "tiktokindonesia", platform: ["tiktok"], volume: "very-high", trend7: t7(82,95), trend30: t7(85,97) },
    { tag: "fypシ", platform: ["tiktok"], volume: "high", trend7: t7(75,92), trend30: t7(78,93) },
    { tag: "duet", platform: ["tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
    { tag: "stitch", platform: ["tiktok"], volume: "medium", trend7: t7(45,60), trend30: t7(50,65) },
    { tag: "tiktokviral", platform: ["tiktok"], volume: "high", trend7: t7(70,88), trend30: t7(75,90) },
    { tag: "trendtiktok", platform: ["tiktok"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
    { tag: "foryou", platform: ["tiktok"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
    { tag: "tiktokvideo", platform: ["tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
    { tag: "tiktokchallenge", platform: ["tiktok"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
    { tag: "tiktoktrend", platform: ["tiktok"], volume: "medium", trend7: t7(55,70), trend30: t7(60,72) },
  ],
  instagram: [
    { tag: "instagram", platform: ["instagram"], volume: "very-high", trend7: t7(88,99), trend30: t7(90,99) },
    { tag: "reels", platform: ["instagram"], volume: "very-high", trend7: t7(88,99), trend30: t7(90,99) },
    { tag: "explorepage", platform: ["instagram"], volume: "very-high", trend7: t7(85,98), trend30: t7(88,99) },
    { tag: "instagood", platform: ["instagram"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
    { tag: "instadaily", platform: ["instagram"], volume: "high", trend7: t7(70,85), trend30: t7(75,88) },
    { tag: "photooftheday", platform: ["instagram"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
    { tag: "likeforlike", platform: ["instagram"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
    { tag: "followforfollow", platform: ["instagram"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
    { tag: "instafashion", platform: ["instagram"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
    { tag: "instagramreels", platform: ["instagram"], volume: "very-high", trend7: t7(80,95), trend30: t7(85,97) },
    { tag: "reelsinstagram", platform: ["instagram"], volume: "high", trend7: t7(72,88), trend30: t7(75,90) },
    { tag: "instatips", platform: ["instagram"], volume: "medium", trend7: t7(50,65), trend30: t7(55,68) },
    { tag: "igreels", platform: ["instagram"], volume: "high", trend7: t7(68,85), trend30: t7(72,88) },
    { tag: "reel", platform: ["instagram"], volume: "very-high", trend7: t7(82,95), trend30: t7(85,97) },
    { tag: "instalike", platform: ["instagram"], volume: "medium", trend7: t7(40,55), trend30: t7(45,60) },
  ],
};

// Enriched semantic expansion word pairs
export const semanticExpansions: Record<string, string[]> = {
  // Fitness / Sport
  "lari": ["running", "jogging", "sprint", "marathon", "race", "track"],
  "marathon": ["lari", "running", "halfmarathon", "ultramarathon", "race", "endurance"],
  "olahraga": ["sport", "fitness", "gym", "workout", "exercise", "athletic"],
  "gym": ["fitness", "bodybuilding", "workout", "gymlife", "gymmotivation"],

  // Investment / Finance
  "investasi": ["investing", "saham", "stock", "finance", "wealth", "financialfreedom", "investor"],
  "saham": ["stock", "investasi", "trading", "market", "finance", "capitalmarket"],
  "uang": ["money", "wealth", "finance", "earnmoney", "passiveincome", "financial"],

  // Food
  "makanan": ["food", "kuliner", "masakan", "recipe", "delicious", "streetfood", "foodie"],
  "kuliner": ["food", "makanan", "travelfood", "streetfood", "foodie", "foodblogger"],
  "masak": ["cooking", "recipe", "baking", "chef", "homemade", "kitchen"],

  // Health
  "kesehatan": ["health", "wellness", "sehat", "fitness", "selfcare", "healthy"],
  "sehat": ["health", "healthy", "wellness", "fitness", "nutrition", "fit"],

  // Business
  "bisnis": ["business", "entrepreneur", "startup", "marketing", "branding", "ecommerce"],
  "jualan": ["selling", "onlineshop", "ecommerce", "business", "shop", "marketplace"],

  // Travel
  "travel": ["wanderlust", "trip", "adventure", "explore", "vacation", "holiday"],
  "liburan": ["vacation", "holiday", "trip", "travel", "getaway", "weekend"],

  // Fashion
  "fashion": ["style", "ootd", "outfit", "trend", "modestfashion", "streetwear"],
  "baju": ["clothes", "outfit", "fashion", "style", "ootd", "wardrobe"],

  // Beauty
  "kecantikan": ["beauty", "makeup", "skincare", "glowup", "selfcare", "beautytips"],
  "makeup": ["beauty", "skincare", "makeuptutorial", "cosmetic", "glowup"],

  // Gaming
  "game": ["gaming", "gamer", "esport", "playstation", "mobilelegend", "mlbb"],
  "main": ["game", "gaming", "play", "fun", "challenge", "live"],

  // Music
  "musik": ["music", "song", "musician", "singer", "cover", "livemusic"],
  "lagu": ["song", "music", "cover", "singer", "newmusic", "indiemusic"],

  // Technology
  "teknologi": ["technology", "tech", "digital", "gadget", "innovation", "future"],
  "komputer": ["computer", "tech", "gadget", "pcgaming", "laptop", "coding"],

  // Education
  "pendidikan": ["education", "learning", "study", "knowledge", "skill", "school"],
  "belajar": ["learning", "study", "education", "skill", "knowledge", "course"],

  // Photography
  "fotografi": ["photography", "photo", "camera", "portrait", "edit", "photographer"],
  "foto": ["photo", "photography", "photoshoot", "camera", "picture"],

  // Motivation
  "motivasi": ["motivation", "inspiration", "success", "quotes", "mindset", "positive"],
  "sukses": ["success", "motivation", "goals", "achievement", "winner"],

  // Islamic
  "islam": ["islamic", "muslim", "quran", "doa", "hijrah", "ramadhan", "dakwah"],
  "pengajian": ["ngaji", "quran", "islamic", "muslim", "kajian", "doa"],

  // Parenting
  "parenting": ["momlife", "dadlife", "family", "anak", "ibu", "ayah", "parentingtips"],
  "keluarga": ["family", "parenting", "momlife", "familytime", "ayah", "ibu"],

  // Automotive
  "mobil": ["car", "automotive", "modifikasi", "reviewmobil", "otomotif", "supercar"],
  "motor": ["bike", "motorcycle", "automotive", "riding", "modifikasi", "motovlog"],

  // Crypto
  "crypto": ["blockchain", "bitcoin", "ethereum", "nft", "web3", "cryptotrading"],
  "bitcoin": ["crypto", "blockchain", "btc", "trading", "investing", "cryptocurrency"],

  // Digital Marketing
  "marketing": ["digitalmarketing", "seo", "socialmediamarketing", "branding", "contentmarketing"],
  "bisnisonline": ["onlineshop", "ecommerce", "digitalmarketing", "startup", "socialmedia", "affiliatemarketing"],

  // General
  "cinta": ["love", "selflove", "relationship", "heart", "romantic"],
  "kerja": ["work", "career", "job", "professional", "office", "kerja sama"],
  "rumah": ["home", "house", "interior", "decor", "family", "rumah minimalis"],
};

export function findNiche(keyword: string): string | null {
  const lower = keyword.toLowerCase().trim();

  // Priority 1: Exact keyword match
  for (const [niche, entry] of Object.entries(nicheDatabase)) {
    if (entry.keywords.some(k => lower.includes(k) || k.includes(lower))) {
      return niche;
    }
  }

  // Priority 2: Expansion match
  for (const [niche, entry] of Object.entries(nicheDatabase)) {
    if (entry.expansions.some(e => lower.includes(e) || e.includes(lower))) {
      return niche;
    }
  }

  // Priority 3: Semantic expansion match
  for (const [word, expansions] of Object.entries(semanticExpansions)) {
    if (lower.includes(word) || expansions.some(e => lower.includes(e))) {
      if (["lari", "marathon", "olahraga", "gym", "running"].includes(word) || expansions.some(e => ["running", "fitness", "exercise", "gym"].includes(e))) return "fitness";
      if (["investasi", "saham", "uang"].includes(word)) return "investment";
      if (["makanan", "kuliner", "masak"].includes(word)) return "food";
      if (["kesehatan", "sehat"].includes(word)) return "health";
      if (["travel", "liburan"].includes(word)) return "travel";
      if (["fashion", "baju"].includes(word)) return "fashion";
      if (["kecantikan", "makeup"].includes(word)) return "beauty";
      if (["game", "main"].includes(word)) return "gaming";
      if (["musik", "lagu"].includes(word)) return "music";
      if (["teknologi", "komputer"].includes(word)) return "technology";
      if (["pendidikan", "belajar"].includes(word)) return "education";
      if (["fotografi", "foto"].includes(word)) return "photography";
      if (["motivasi", "sukses"].includes(word)) return "business";
      if (["islam", "pengajian"].includes(word)) return "islamic";
      if (["parenting", "keluarga"].includes(word)) return "parenting";
      if (["mobil", "motor"].includes(word)) return "automotive";
      if (["crypto", "bitcoin"].includes(word)) return "crypto";
      if (["marketing", "bisnisonline"].includes(word)) return "digitalmarketing";
    }
  }

  return null;
}

export function getTagsByNiche(niche: string): Omit<Hashtag, "score" | "category" | "competition">[] {
  return nicheDatabase[niche]?.tags || [];
}

export function getExpansionsByNiche(niche: string): string[] {
  return nicheDatabase[niche]?.expansions || [];
}

export function getAllNiches(): string[] {
  return Object.keys(nicheDatabase);
}