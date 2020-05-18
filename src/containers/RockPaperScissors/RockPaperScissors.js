import React, { useReducer } from 'react';
import styles from './RockPaperScissors.module.css';

import scissors from '../../assets/images/scissors.png';
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import { choices } from '../../shared/constants';

const initialState = {
  userChoice: null,
  aiChoice: null,
  roundResult: null,
  result: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setUserChoice':
      return { ...state, userChoice: action.payload };
    case 'setAiChoice':
      return { ...state, aiChoice: action.payload };
    case 'roundResult':
      return { ...state, roundResult: action.payload };
    case 'result':
      return { ...state, result: action.payload };
    default:
      throw new Error();
  }
}

const RockPaperScissors = () => {
  const choiceUrls = { scissors, rock, paper };

  const [state, dispatch] = useReducer(reducer, initialState);


  const userChoiceHandler = userChoice => {
    dispatch({ type: 'setUserChoice', payload: userChoice });
    dispatch({ type: 'setAiChoice', payload: setAiChoiceHandler() });
    dispatch({ type: 'roundResult', payload: compare() });
    dispatch({ type: 'result', payload: `Computer's choice: ${state.aiChoice}. ${state.roundResult}` });

    console.log('state >>', state);
  }

  const setAiChoiceHandler = () => {
    const minNumber = 0;
    const maxNumber = 2;
    return choices[Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)];
  };

  const compare = () => {
    if (
      (state.userChoice === 'rock' && state.aiChoice === 'scissors') ||
      (state.userChoice === 'paper' && state.aiChoice === 'rock') ||
      (state.userChoice === 'scissors' && state.aiChoice === 'paper')
    ) {
      return 'You win!';
    } else if (
      (state.userChoice === 'scissors' && state.aiChoice === 'rock') ||
      (state.userChoice === 'rock' && state.aiChoice === 'paper') ||
      (state.userChoice === 'paper' && state.aiChoice === 'scissors')
    ) {
      return 'Computer wins!';
    } else {
      return 'The result is a tie!';
    }
  };

  return (
    <main className={styles.gameContainer}>
      <header>
        <h1>Rock, paper, scissors game</h1>
      </header>
      <div className={styles.mainSection}>
        {state.result || 'Make your choice and cross your fingers to win against the AI..'}
        <div className={styles.choicesContainer}>
          {choices.map((choice, index) => (
            <div key={index} className={styles.choice} onClick={() => userChoiceHandler(choice)}>
              <img src={choiceUrls[choice]} alt={choice} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default RockPaperScissors;