import React, { useReducer, useEffect } from 'react';
import styles from './SumGame.module.css';

import Number from './Number/Number';
import { getNumbers, calculateSum } from './utility';

const initialState = {
  gameStarted: false,
  numbers: ['?', '?', '?', '?', '?', '?'],
  target: '?',
  selectedNumbersSum: 0
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
    default:
      return state;
  }
};

const SumGame = () => {
  const [config, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (config.gameStarted) {
      dispatch({ type: 'GENERATE_TARGET' });
    }
  }, [config.numbers, config.gameStarted]);

  useEffect(() => {
    console.log('selectedNumbersSum >>', config.selectedNumbersSum);
  }, [config.selectedNumbersSum]);

  const start = () => {
    dispatch({ type: 'START_GAME' });
    dispatch({ type: 'CLEAR_SELECTED_NUMBER_SUM' });
    dispatch({ type: 'GENERATE_NUMBERS' });;
  }

  const getSelectedNumber = chosenNumber => {
    dispatch({ type: 'ADD_NUMBER_TO_SUM', selectedNumber: chosenNumber })
    console.log(chosenNumber);
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
              clicked={getSelectedNumber}
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