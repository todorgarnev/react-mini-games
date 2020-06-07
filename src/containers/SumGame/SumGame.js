import React, { useReducer, useEffect } from 'react';
import styles from './SumGame.module.css';

import Number from './Number/Number';
import { getNumbers, calculateSum } from './utility';

const initialState = {
  gameStarted: false,
  numbers: ['?', '?', '?', '?', '?', '?'],
  target: '?',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        gameStarted: true
      };
    case 'GENERATE_NUMBERS':
      return {
        ...state,
        numbers: action.numbers
      };
    case 'GENERATE_TARGET':
      return {
        ...state,
        target: action.target
      };
    default:
      return state;
  }
};

const SumGame = () => {
  const [config, dispatch] = useReducer(reducer, initialState);
  const gameSize = 6;

  useEffect(() => {
    if (config.gameStarted) {
      dispatch({ type: 'GENERATE_TARGET', target: calculateSum([...config.numbers]) });
    }
  }, [config.numbers]);

  const start = () => {
    dispatch({ type: 'START_GAME' });
    dispatch({ type: 'GENERATE_NUMBERS', numbers: getNumbers(gameSize) });;
  }

  return (
    <main className={styles.gameContainer}>
      <header>
        <h1>The targe sum</h1>
      </header>
      <div className={styles.mainSection}>
        <div className={styles.target}>{config.target}</div>
        <div className={styles.challengeNumbers}>
          {config.numbers.map((number, index) => (
            <Number
              key={index}
              number={number}
            />)
          )}
        </div>
        <div className={styles.footer}>
          <div className={styles.timerValue}>10</div>
          <button className={styles.start} onClick={() => start()}>Start</button>
        </div>
      </div>
    </main>
  );
};

export default SumGame;