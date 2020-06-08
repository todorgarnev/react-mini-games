import React, { useReducer, useEffect, useCallback } from 'react';
import styles from './SumGame.module.css';

import Number from './Number/Number';
import { reducer } from './reducer';

const initialState = {
  gameStarted: false,
  numbers: ['?', '?', '?', '?', '?', '?'],
  target: '?',
  selectedNumbersSum: 0,
  timer: 10,
  startButton: 'Start',
  timeInterval: null
};

const SumGame = () => {
  const [config, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (config.gameStarted) {
      dispatch({ type: 'GENERATE_TARGET' });
    }
  }, [config.numbers, config.gameStarted]);

  const start = () => {
    const getTimer = setInterval(() => dispatch({ type: 'UPDATE_TIME' }), 1000);

    dispatch({ type: 'SET_TIME_INTERVAL', timeInterval: getTimer });

    dispatch({ type: 'START_GAME' });
    dispatch({ type: 'CLEAR_SELECTED_NUMBER_SUM' });
    dispatch({ type: 'GENERATE_NUMBERS' });
    dispatch({ type: 'UPDATE_START_BUTTON' });
  }

  const getSelectedNumber = chosenNumber => {
    console.log('!');
    dispatch({ type: 'ADD_NUMBER_TO_SUM', selectedNumber: chosenNumber })
  }

  // const success = () => {
  //   // color target green
  //   endGame();
  // }

  const endGame = useCallback(() => {
    console.log('interval cleared');
    dispatch({ type: 'END_GAME' });
    dispatch({ type: 'RESET_TIME' });
    clearInterval(config.timeInterval);
    dispatch({ type: 'CLEAR_TIME_INTERVAL' });
  }, [config.timeInterval]);

  const fail = useCallback(() => {
    // color target red
    endGame();
    console.log('fail');
  }, [endGame]);

  useEffect(() => {
    if (config.timer === 0) {
      fail();
    }
  }, [config.timer, fail])

  useEffect(() => {
    return () => {
      clearInterval(config.timeInterval);
      dispatch({ type: 'CLEAR_TIME_INTERVAL' });
    }
  }, []);

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
              selectNumber={getSelectedNumber}
              started={config.gameStarted}
            />)
          )}
        </div>
        <div className={styles.footer}>
          {
            config.gameStarted ?
              <div className={styles.timerValue}>{config.timer}</div> :
              <button className={styles.start} onClick={() => start()}>
                {config.startButton}
              </button>
          }
        </div>
      </div>
    </main>
  );
};

export default SumGame;