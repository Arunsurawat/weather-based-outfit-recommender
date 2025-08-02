import exp from "constants";
import React, { createContext, useState } from "react";

interface WeatherData {
  city: string;
  temerature: number | null;
  condition: string;
  windSpeed: number | null;
  humidity: number | null;
}
interface WeatherContextType {
  weather: WeatherData | null;
  setWeather: (data: WeatherData) => void;
  history: string[];
  addToHistory: (city: string) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const WeatherContext = createContext<WeatherContextType>(
  {} as WeatherContextType
);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const addToHistory = (city: string) => {
    setHistory((prev) => {
      const updated = [city, ...prev.filter((c) => c !== city)];
      return updated.slice(0, 5);
    });
  };

  return (
    <WeatherContext.Provider
      value={{ weather, setWeather, history, addToHistory, theme, toggleTheme }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
