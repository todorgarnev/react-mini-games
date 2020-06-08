import React, { useState, useEffect, useCallback } from 'react';
import styles from './RockPaperScissors.module.css';

import scissors from '../../assets/images/scissors.png';
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import { options } from '../../shared/constants/constants';

const RockPaperScissors = () => {
  const [choices, setChoices] = useState({
    userChoice: null,
    aiChoice: null
  });
  const [result, setResult] = useState('Make your choice and cross your fingers to win against the AI..');
  const choiceUrls = { scissors, rock, paper };

  const userChoiceHandler = userChoice => {
    setChoices({
      userChoice: userChoice,
      aiChoice: setAiChoiceHandler()
    });
  }

  const setAiChoiceHandler = () => {
    const minNumber = 0;
    const maxNumber = 2;
    return options[Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)];
  };

  const compare = useCallback(() => {
    const { userChoice, aiChoice } = choices;

    if (
      (userChoice === 'rock' && aiChoice === 'scissors') ||
      (userChoice === 'paper' && aiChoice === 'rock') ||
      (userChoice === 'scissors' && aiChoice === 'paper')
    ) {
      return 'You win!';
    } else if (
      (userChoice === 'scissors' && aiChoice === 'rock') ||
      (userChoice === 'rock' && aiChoice === 'paper') ||
      (userChoice === 'paper' && aiChoice === 'scissors')
    ) {
      return 'Computer wins!';
    } else {
      return 'The result is a tie!';
    }
  }, [choices]);

  useEffect(() => {
    if (choices.userChoice !== null) {
      const resultContainer = (
        <React.Fragment>
          <div>Ai choice: <span>{choices.aiChoice}</span>.</div>
          <div className={styles.result}>{compare()}</div>
        </React.Fragment>
      );

      setResult(resultContainer);
    }
  }, [choices, compare]);

  return (
    <main className={styles.gameContainer}>
      <header>
        <h1>Rock, paper, scissors game</h1>
      </header>
      <div className={styles.mainSection}>
        {result}
        <div className={styles.choicesContainer}>
          {options.map((choice, index) => (
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