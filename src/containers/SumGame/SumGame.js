import React, { useReducer, useEffect, useCallback, useState } from 'react';
import styles from './SumGame.module.css';

import GameContainer from '../../components/GameContainer/GameContainer';
import Number from './Number/Number';
import { reducer } from './reducer';

const initialState = {
  gameStarted: false,
  numbers: ['?', '?', '?', '?', '?', '?'],
  target: '?',
  selectedNumbersSum: 0,
  timer: 10,
  playButtonText: 'Start',
  result: null,
  showPlayButton: true
};

const SumGame = () => {
  const [config, dispatch] = useReducer(reducer, initialState);
  const [timeInterval, setTimeInterval] = useState(null)
  const {
    gameStarted,
    numbers,
    timer,
    selectedNumbersSum,
    target,
    showPlayButton,
    result,
    playButtonText
  } = config;

  const start = () => {
    setTimeInterval(setInterval(() => dispatch({ type: 'UPDATE_TIME' }), 1000));

    dispatch({ type: 'SET_RESULT', result: null })
    dispatch({ type: 'CLEAR_SELECTED_NUMBER_SUM' });
    dispatch({ type: 'RESET_TIME' });
    dispatch({ type: 'START_GAME' });
    dispatch({ type: 'GENERATE_NUMBERS' });
    dispatch({ type: 'UPDATE_START_BUTTON' });
  }

  const getSelectedNumber = chosenNumber => {
    dispatch({ type: 'ADD_NUMBER_TO_SUM', selectedNumber: chosenNumber })
  }

  const endGame = useCallback(() => {
    clearInterval(timeInterval);
    dispatch({ type: 'END_GAME' });
  }, [timeInterval]);

  useEffect(() => {
    if (gameStarted) {
      dispatch({ type: 'GENERATE_TARGET' });
    }
  }, [gameStarted]);

  useEffect(() => {
    if (timer === 0) {
      dispatch({ type: 'SET_RESULT', result: 'loss' });
      endGame();
    }
  }, [timer, endGame]);

  useEffect(() => {
    if (selectedNumbersSum !== 0) {
      if (selectedNumbersSum > target) {
        dispatch({ type: 'SET_RESULT', result: 'loss' });
        endGame();
      } else if (selectedNumbersSum === target) {
        dispatch({ type: 'SET_RESULT', result: 'win' });
        endGame();
      }
    }
  }, [selectedNumbersSum, target, endGame]);

  useEffect(() => {
    if (!showPlayButton) {
      dispatch({ type: 'RESET_TIME' });
    }
  }, [showPlayButton]);

  useEffect(() => {
    return () => {
      clearInterval(timeInterval);
    }
  }, []);

  return (
    <GameContainer gameTitle="The target sum">
      <div className={styles.innerContainer}>
        <div className={`${styles.target} ${styles[result]}`}>{target}</div>
        <div className={styles.challengeNumbers}>
          {numbers.map((number, index) => (
            <Number
              key={index}
              number={number}
              selectNumber={getSelectedNumber}
              started={gameStarted}
              showPlayButton={showPlayButton}
            />)
          )}
        </div>
        <div className={styles.footer}>
          <div className={styles.timerValue}>{timer}</div>
          {showPlayButton &&
            <button className={styles.start} onClick={() => start()}>
              {playButtonText}
            </button>}
        </div>
      </div>
    </GameContainer>
  );
};

export default SumGame;