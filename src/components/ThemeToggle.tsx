import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";


export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(WeatherContext);

  return (
    <button className={`theme-toggle ${theme}`} onClick={toggleTheme}>
      {theme === "light" ? "🌙 Switch to Dark Mode" : "☀️ Switch to Light Mode"}
    </button>
  );
};
