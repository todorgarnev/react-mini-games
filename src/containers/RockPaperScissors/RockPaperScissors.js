import React, { useState } from 'react';
import styles from './RockPaperScissors.module.css';

import scissor from '../../assets/images/scissor.png';
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import { choices } from '../../shared/constants';

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [aiChoice, setAiChoice] = useState(null);
  const choiceUrls = { scissor, rock, paper };

  const chooseHandler = (choice) => {
    console.log(choice);
  };

  return (
    <main className={styles.gameContainer}>
      <header>
        <h1>Rock, paper, scissors game</h1>
      </header>
      <div className={styles.mainSection}>
        <p>Make your choice and cross your fingers to win against the AI..</p>
        <div className={styles.choicesContainer}>
          {choices.map((choice, index) => (
            <div key={index} className={styles.choice} onClick={() => chooseHandler(choice)}>
              <img src={choiceUrls[choice]} alt={choice} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default RockPaperScissors;