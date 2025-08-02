import React, { useContext } from "react";
import { WeatherProvider,WeatherContext } from './context/WeatherContext';
import Home from './pages/Home';
import './App.css'; 

const AppWrapper = () => {
  const { theme } = useContext(WeatherContext);
  return <div className={theme}><Home /></div>;
};

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <AppWrapper/>
      </WeatherProvider>
    </div>
  );
}

export default App;
