import React from 'react';
import HomePage from './pages/HomePage';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Movies Now</h1>
      </header>
      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default App;