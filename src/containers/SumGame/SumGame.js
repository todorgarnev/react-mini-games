import React from 'react';
import styles from './SumGame.module.css';

import Number from './Number/Number';

const SumGame = () => {
  const gameSize = 6;

  return (
    <main className={styles.gameContainer}>
      <header>
        <h1>The targe sum</h1>
      </header>
      <div className={styles.mainSection}>
        <div className={styles.target}>?</div>
        <div className={styles.challengeNumbers}>
          {[...Array(gameSize)].map((_, index) => <Number key={index} />)}
        </div>
        <div className={styles.footer}>
          <div className={styles.timerValue}>10</div>
          <button className={styles.start}>Start</button>
        </div>
      </div>
    </main>
  );
};

export default SumGame;