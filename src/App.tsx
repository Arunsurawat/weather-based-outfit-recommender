import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WeatherProvider } from './context/WeatherContext';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <Home/>
      </WeatherProvider>
    </div>
  );
}

export default App;
