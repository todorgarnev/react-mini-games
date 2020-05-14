import React, { useState } from 'react';
import styles from './DragonGame.module.css';

import Button from '../../components/UI/Button/Button';


const DragonGame = () => {
  const [hitDmg, setHitDmg] = useState(null);
  const [result, setResult] = useState('Click play and try to kill the dragon..');
  const dragonHealth = 4;

  const fight = () => {
    setHitDmg(Math.floor(Math.random() * 10));

    hitDmg >= dragonHealth
      ? setResult(`You hit the dragon and did ${hitDmg} damage! You did it! You slew the dragon!`)
      : setResult('The dragon burninates you! You\'re toast.')
  }


  return (
    <main className={styles.dragonGameContainer}>
      <header>
        <h1>Kill  the dragon</h1>
      </header>
      <div className={styles.mainSection}>
        <p>{result}</p>
        <Button click={fight}>Play</Button>
      </div>
    </main>
  );
};

export default DragonGame;