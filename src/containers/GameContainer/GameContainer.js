import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './GameContainer.module.css';

import Button from '../../components/UI/Button/Button';

const GameContainer = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    console.log('currentPath>>', currentPath);
  }, [location]);

  const clickHandler = () => {
    console.log('clicked');
  }

  return (
    <main className={styles.gameContainer}>
      <header>
        <h1>Forest Adventure</h1>
      </header>
      <div className={styles.mainSection}>
        <p>You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?</p>
        <div className={styles.buttonsContainer}>
          <Button click={clickHandler}>Fight</Button>
          <Button click={clickHandler}>Pay</Button>
          <Button click={clickHandler}>Run</Button>
        </div>
      </div>
    </main>
  );
};

export default GameContainer;