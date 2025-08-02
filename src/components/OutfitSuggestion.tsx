import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { getOutfitSuggestion } from "../utils/getOutfitSuggestion";

export const OutfitSuggestion = () => {
  const { weather } = useContext(WeatherContext);

  if (!weather) return null;
  const suggestion = getOutfitSuggestion(
    weather.condition,
    weather.temperature || 0
  );

  return (
    <div>
      <div className="suggestion">{suggestion}</div>
    </div>
  );
};
