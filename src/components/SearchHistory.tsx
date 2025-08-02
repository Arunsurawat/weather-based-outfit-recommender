import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { fetchWeather } from "../services/weatherAPI";

export const SearchHistory = () => {
  const { history, setWeather, addToHistory } = useContext(WeatherContext);

  const handleClick = async (city: string) => {
    try {
      const data = await fetchWeather(city);
      const weatherData = {
        city: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].main,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
      };
      setWeather(weatherData);
      addToHistory(city);
    } catch {
      alert("Could not fetch weather for this city");
    }
  };

  return (
    <div>
      <h4>Recent Searches:</h4>
      <ul>
        {history.map((city, idx) => (
          <li key={idx} onClick={() => handleClick(city)} style={{ cursor: "pointer" }}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

