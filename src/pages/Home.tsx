import React from "react";
import  SearchInput  from "../components/SearchInput";
import WeatherCard from "../components/WeatherCard";
import { OutfitSuggestion } from "../components/OutfitSuggestion";
import { SearchHistory} from "../components/SearchHistory";
import { ThemeToggle } from "../components/ThemeToggle";

const Home = () => {
  return (
    <div className="app">
      <ThemeToggle />
      <SearchInput />
      <WeatherCard />
      <OutfitSuggestion />
      <SearchHistory />
    </div>
  );
};

export default Home;
