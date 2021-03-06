import React, { useState } from 'react';
import styles from './DragonGame.module.css';

import GameContainer from '../../components/GameContainer/GameContainer';
import Button from '../../components/UI/Button/Button';

const DragonGame = () => {
  const [hitDmg, setHitDmg] = useState(null);
  const [result, setResult] = useState(<p>Click play and try to kill the dragon..</p>);
  const dragonHealth = 4;

  const fight = () => {
    setHitDmg(Math.floor(Math.random() * 10));

    hitDmg >= dragonHealth
      ? setResult(<p>You hit the dragon and did <span>{hitDmg}</span> damage! You did it! You slew the dragon!</p>)
      : setResult(<p>The dragon burns you! You're toast.</p>)
  };

  return (
    <GameContainer gameTitle="Kill  the dragon">
      <div className={styles.result}>{result}</div>
      <Button click={fight}>Play</Button>
    </GameContainer>
  );
};

export default DragonGame;