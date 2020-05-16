import React, { useState, useEffect, useCallback } from 'react';
import styles from './RockPaperScissors.module.css';

import scissors from '../../assets/images/scissors.png';
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import { choices } from '../../shared/constants';

const RockPaperScissors = () => {
  const [result, setResult] = useState(<p>Make your choice and cross your fingers to win against the AI..</p>);
  const [aiChoice, setAiChoice] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [roundResult, setRoundResult] = useState(null);
  const choiceUrls = { scissors, rock, paper };

  useEffect(() => {
    setAiChoiceHandler();
    compare();
    setResult(<p>Computer's choice: <span>{aiChoice}</span>. {roundResult}</p>);
  }, [userChoice, aiChoice]);

  const userChoiceHandler = userChoice => setUserChoice(userChoice);

  const setAiChoiceHandler = () => {
    const minNumber = 0;
    const maxNumber = 2;
    setAiChoice(choices[Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)]);
  };

  const compare = () => {
    console.log('userChoice >>', userChoice);
    console.log('aiChoice >>', aiChoice);

    const test = userChoice === aiChoice ? 'The result is a tie!'
      : (userChoice === 'rock' && aiChoice === 'scissors') ? 'You win!'
        : (userChoice === 'scissors' && aiChoice === 'rock') ? 'Computer wins!'
          : (userChoice === 'paper' && aiChoice === 'rock') ? 'You win!'
            : (userChoice === 'rock' && aiChoice === 'paper') ? 'Computer wins!'
              : (userChoice === 'scissors' && aiChoice === 'paper') ? 'You win!'
                : (userChoice === 'paper' && aiChoice === 'scissors') ? 'Computer wins!'
                  : null;
    setRoundResult(test);
  };

  return (
    <main className={styles.gameContainer}>
      <header>
        <h1>Rock, paper, scissors game</h1>
      </header>
      <div className={styles.mainSection}>
        {result}
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