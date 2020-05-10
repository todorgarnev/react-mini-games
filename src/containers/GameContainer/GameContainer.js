import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './GameContainer.module.css';

import Button from '../../components/UI/Button/Button';
import { trollGame } from '../../shared/troll-game';
import { dragonGame } from '../../shared/dragon-game';

const GameContainer = () => {
  const currentPathName = useLocation().pathname;
  const [game, setGame] = useState(null);
  const [step, setStep] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    switch (currentPathName) {
      case '/trollgame':
        setGame(trollGame);
        setStep(trollGame.intro.prompt);
        setOptions(trollGame.intro.options);
        break;
      case '/slayingdragon':
        setGame(dragonGame);
        setStep(null);
        setOptions([]);
        break;
      default:
        setGame(null);
        setStep(null);
        setOptions([]);
        break;
    }
  }, [currentPathName]);

  const clickHandler = (path) => {
    setStep(game[path].prompt);
    setOptions(game[path].options);
  }

  const test = game && (
    <main className={styles.gameContainer}>
      <header>
        <h1>{game.gameTitle}</h1>
      </header>
      <div className={styles.mainSection}>
        <p>{step}</p>
        <div className={styles.buttonsContainer}>
          {options.map((option, index) => <Button key={index} click={() => clickHandler(option.path)}>{option.name}</Button>)}
        </div>
      </div>
    </main>
  );

  return test;
};

export default GameContainer;