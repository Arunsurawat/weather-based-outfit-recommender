import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { motion } from "framer-motion";

const WeatherCard = () => {
  const { weather } = useContext(WeatherContext);
  if (!weather) return null;

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{weather.city}</h2>
      <p>🌡 Temperature: {weather.temperature} °C</p>
      <p>🌥 Condition: {weather.condition}</p>
      <p>💨 Wind: {weather.windSpeed} m/s</p>
      <p>💧 Humidity: {weather.humidity}%</p>
    </motion.div>
  );
};

export default WeatherCard;
