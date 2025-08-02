import React, { useState, useContext, useEffect } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { fetchWeather } from "../services/weatherAPI";
import { useDebounce } from "../hooks/useDebounce";
import { getCitySuggestions } from "../services/cityAPI";

const SearchInput = () => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const debouncedCity = useDebounce(city, 500);
  const { setWeather, addToHistory } = useContext(WeatherContext);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedCity.length > 2) {
        setLoading(true);
        try {
          const results = await getCitySuggestions(debouncedCity);
          setSuggestions(results);
          if (results.length === 0) {
            setError("No suggestions found");
          } else {
            setError(null);
          }
        } catch {
          setSuggestions([]);
          setError("Failed to fetch suggestions");
        } finally {
          setLoading(false);
        }
      } else {
        setSuggestions([]);
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [debouncedCity]);

  const handleSearch = async (searchCity: string = city) => {
    try {
      const cleanCity = searchCity.split(",")[0]; // get only city name
      const data = await fetchWeather(cleanCity);
      const weatherData = {
        city: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].main,
        windSpeed: data.wind.speed,
        humidity: data.main.humidity,
      };
      setWeather(weatherData);
      addToHistory(data.name);
      setSuggestions([]);
    } catch (err: any) {
      alert(err.message || "City not found or API error");
    }
  };

  return (
    <div>
      <input
        className="search-input"
        type="text"
        value={city}
        placeholder="Enter city name"
        onChange={(e) => {
          setCity(e.target.value);
          if (e.target.value === "") {
            setSuggestions([]);
            setError(null);
          }
        }}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        required
      />
      <button className="theme-toggle" onClick={() => handleSearch()}>
        Search
      </button>

      {loading && (
        <p style={{ fontStyle: "italic", color: "#888" }}>
          Loading suggestions...
        </p>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {suggestions.length > 0 && (
        <ul
          style={{
            border: "1px solid #ccc",
            padding: "0.5rem",
            marginTop: "4px",
          }}
        >
          {suggestions.map((s, idx) => (
            <li
              key={idx}
              onClick={() => handleSearch(s)}
              style={{ cursor: "pointer" }}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
