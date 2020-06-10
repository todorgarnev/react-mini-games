import React from 'react';
import styles from './GameContainer.module.css';

const GameContainer = (props) => {
  return (
    <main className={styles.gameContainer}>
      <header>
        <h1>{props.gameTitle}</h1>
      </header>
      <div className={styles.mainSection}>
        {props.children}
      </div>
    </main>
  );
};

export default GameContainer;