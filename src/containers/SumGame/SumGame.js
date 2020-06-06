import React, { useState } from 'react';
import styles from './SumGame.module.css';

import Number from './Number/Number';

const SumGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [numbers, setNumbers] = useState(['?', '?', '?', '?', '?', '?']);
  const [target, setTarget] = useState(0);
  const gameSize = 6;

  const getRandomNumber = (numMin, numMax) => Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;

  const getNumbers = () => {
    const numbersArray = [];

    for (let i = 0; i < gameSize; i++) {
      numbersArray.push(getRandomNumber(1, 9));
    }

    setNumbers(numbersArray);
    calculateSum([...numbersArray]);
  }

  const calculateSum = numbersArr => {
    let sum = 0;
    let numMax = 5;

    for (let i = 0; i <= numbersArr.length; i++) {
      const tempNumberPosition = getRandomNumber(0, numMax);
      sum += numbersArr[tempNumberPosition];
      numbersArr.splice(tempNumberPosition, 1);
      numMax -= 1;
    }

    setTarget(sum);
  }

  const start = () => {
    // setGameStarted(!gameStarted);
    getNumbers();
  }

  return (
    <main className={styles.gameContainer}>
      <header>
        <h1>The targe sum</h1>
      </header>
      <div className={styles.mainSection}>
        <div className={styles.target}>{target}</div>
        <div className={styles.challengeNumbers}>
          {numbers.map((number, index) => (
            <Number
              key={index}
              number={number}
            />)
          )}
        </div>
        <div className={styles.footer}>
          <div className={styles.timerValue}>10</div>
          <button className={styles.start} onClick={() => getNumbers()}>Start</button>
        </div>
      </div>
    </main>
  );
};

export default SumGame;