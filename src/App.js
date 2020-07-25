import React from 'react';
import './App.css';
import Clock from './components/Clock.js';
import Weekday from './components/Weekday.js';

function App() {
  return (
    <div className="App">
      <Clock />
      <Weekday />
    </div>
  );
}

export default App;
