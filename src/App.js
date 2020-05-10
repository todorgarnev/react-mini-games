import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import GameContainer from './containers/GameContainer/GameContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <GameContainer />
      <Footer />
    </div>
  );
}

export default App;
