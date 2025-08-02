import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export const ThemeToggle = () => {
      const { theme, toggleTheme } = useContext(WeatherContext);
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};