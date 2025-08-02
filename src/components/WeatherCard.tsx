import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export const WeatherCard = () => {
  const { weather } = useContext(WeatherContext);

  if (!weather) return null;
  return (
    <div className="card">
      <h2>{weather?.city}</h2>
      <p>🌡 Temperature: {weather?.temperature} °C</p>
      <p>🌥 Condition: {weather?.condition}</p>
      <p>💨 Wind: {weather?.windSpeed} m/s</p>
      <p>💧 Humidity: {weather?.humidity}%</p>
    </div>
  );
};
