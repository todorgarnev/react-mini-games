import React, { useState, useEffect } from 'react';
import styles from './TrollGame.module.css';

import Button from '../../components/UI/Button/Button';
import { trollGame } from './trollGameConfig';

const TrollGame = () => {
  const [prompt, setPrompt] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setPrompt(trollGame.intro.prompt);
    setOptions(trollGame.intro.options);
  }, []);

  const clickHandler = (path) => {
    setPrompt(trollGame[path].prompt);
    setOptions(trollGame[path].options);
  }

  return (
    <main className={styles.trollGameContainer}>
      <header>
        <h1>{trollGame.gameTitle}</h1>
      </header>
      <div className={styles.mainSection}>
        <p>{prompt}</p>
        <div className={styles.buttonsContainer}>
          {options.map((option, index) => <Button key={index} click={() => clickHandler(option.path)}>{option.name}</Button>)}
        </div>
      </div>
    </main>
  );
};

export default TrollGame;