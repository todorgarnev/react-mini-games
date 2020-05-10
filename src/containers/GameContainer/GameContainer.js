import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './GameContainer.module.css';

import Button from '../../components/UI/Button/Button';
import { trollGame } from '../../shared/troll-game';
import { dragonGame } from '../../shared/dragon-game';

const GameContainer = () => {
  const currentPath = useLocation().pathname;
  let game = null;

  switch (currentPath) {
    case '/trollgame':
      game = trollGame;
      break;
    case '/slayingdragon':
      game = dragonGame;
      break;
    default:
      game = null;
      break;
  }

  console.log('game >>', game);

  const clickHandler = () => {
    console.log('clicked');
  }

  const test = game && (
    <main className={styles.gameContainer}>
      <header>
        <h1>{game.title}</h1>
      </header>
      <div className={styles.mainSection}>
        <p>{game.intro.prompt}</p>
        <div className={styles.buttonsContainer}>
          <Button click={clickHandler}>Fight</Button>
          <Button click={clickHandler}>Pay</Button>
          <Button click={clickHandler}>Run</Button>
        </div>
      </div>
    </main>
  );

  return test;
};

export default GameContainer;