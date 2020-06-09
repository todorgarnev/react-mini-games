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
  playButtonText: 'Start',
  timeInterval: null,
  result: null,
  showPlayButton: true
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

    dispatch({ type: 'SET_RESULT', result: null })
    dispatch({ type: 'SET_TIME_INTERVAL', timeInterval: getTimer });
    dispatch({ type: 'START_GAME' });
    dispatch({ type: 'CLEAR_SELECTED_NUMBER_SUM' });
    dispatch({ type: 'GENERATE_NUMBERS' });
    dispatch({ type: 'UPDATE_START_BUTTON' });
    dispatch({ type: 'TOGGLE_PLAY_BUTTON' });
  }

  const getSelectedNumber = chosenNumber => {
    dispatch({ type: 'ADD_NUMBER_TO_SUM', selectedNumber: chosenNumber })
  }

  const endGame = useCallback(() => {
    clearInterval(config.timeInterval);
    dispatch({ type: 'END_GAME' });
    dispatch({ type: 'CLEAR_TIME_INTERVAL' });
    dispatch({ type: 'TOGGLE_PLAY_BUTTON' });
  }, [config.timeInterval]);

  useEffect(() => {
    if (config.timer === 0) {
      endGame();
      dispatch({ type: 'SET_RESULT', result: 'loss' });
    }
  }, [config.timer, endGame]);

  useEffect(() => {
    if (config.selectedNumbersSum !== 0) {
      if (config.selectedNumbersSum > config.target) {
        dispatch({ type: 'SET_RESULT', result: 'loss' });
        endGame();
      } else if (config.selectedNumbersSum === config.target) {
        dispatch({ type: 'SET_RESULT', result: 'win' });
        endGame();
      }
    }
  }, [config.selectedNumbersSum, config.target]);

  useEffect(() => {
    if (!config.showPlayButton) {
      dispatch({ type: 'RESET_TIME' });
    }
  }, [config.showPlayButton]);

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
        <div className={`${styles.target} ${styles[config.result]}`}>{config.target}</div>
        <div className={styles.challengeNumbers}>
          {config.numbers.map((number, index) => (
            <Number
              key={index}
              number={number}
              selectNumber={getSelectedNumber}
              started={config.gameStarted}
              showPlayButton={config.showPlayButton}
            />)
          )}
        </div>
        <div className={styles.footer}>
          <div className={styles.timerValue}>{config.timer}</div>
          {config.showPlayButton &&
            <button className={styles.start} onClick={() => start()}>
              {config.playButtonText}
            </button>}
        </div>
      </div>
    </main>
  );
};

export default SumGame;