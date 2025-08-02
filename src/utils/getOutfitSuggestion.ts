export const getOutfitSuggestion = (condition: string, temp: number): string => {
  if (condition.toLowerCase().includes("rain")) return "🌂 Take an umbrella.";
  if (temp < 10) return "🧥 Wear a warm jacket.";
  if (temp > 30) return "😎 Use sunglasses and stay hydrated.";
  return "👕 Dress comfortably.";
};
