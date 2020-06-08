import React, { useReducer, useEffect } from 'react';
import styles from './SumGame.module.css';

import Number from './Number/Number';
import { getNumbers, calculateSum } from '../../shared/utility/sumGame';
import { useCallback } from 'react';

const initialState = {
  gameStarted: false,
  numbers: ['?', '?', '?', '?', '?', '?'],
  target: '?',
  selectedNumbersSum: 0,
  timer: 10
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
        numbers: getNumbers()
      };
    case 'GENERATE_TARGET':
      return {
        ...state,
        target: calculateSum([...state.numbers])
      };
    case 'ADD_NUMBER_TO_SUM':
      return {
        ...state,
        selectedNumbersSum: state.selectedNumbersSum + action.selectedNumber
      };
    case 'CLEAR_SELECTED_NUMBER_SUM':
      return {
        ...state,
        selectedNumbersSum: 0
      };
    case 'UPDATE_TIME':
      return {
        ...state,
        timer: state.timer - 1
      };
    case 'RESET_TIME':
      return {
        ...state,
        timer: 10
      };
    default:
      return state;
  }
};

const SumGame = () => {
  const [config, dispatch] = useReducer(reducer, initialState);
  let getTimer = null;

  useEffect(() => {
    if (config.gameStarted) {
      dispatch({ type: 'GENERATE_TARGET' });
    }
  }, [config.numbers, config.gameStarted]);

  const start = () => {
    dispatch({ type: 'START_GAME' });
    dispatch({ type: 'CLEAR_SELECTED_NUMBER_SUM' });
    dispatch({ type: 'GENERATE_NUMBERS' });

    getTimer = setInterval(() => dispatch({ type: 'UPDATE_TIME' }), 1000);
  }

  const getSelectedNumber = chosenNumber => {
    console.log('!');
    dispatch({ type: 'ADD_NUMBER_TO_SUM', selectedNumber: chosenNumber })
  }

  const success = () => {
    // color target green
    endGame();
  }

  const endGame = useCallback(() => {
    console.log('interval cleared');
    clearInterval(getTimer);
  }, [getTimer]);

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
      clearInterval(getTimer);
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
          <div className={styles.timerValue}>{config.timer}</div>
          <button className={styles.start} onClick={() => start()}>Start</button>
        </div>
      </div>
    </main>
  );
};

export default SumGame;