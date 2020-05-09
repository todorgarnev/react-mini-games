import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import GameContainer from './components/GameContainer/GameContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <GameContainer />
      <Footer />
    </React.Fragment>
  );
}

export default App;
