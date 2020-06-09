import React, { useState, useEffect } from 'react';
import styles from './Number.module.css';

const Number = ({ number, started, selectNumber, showPlayButton }) => {
  const [clicked, setClicked] = useState(false);

  const numberSelect = () => {
    setClicked(true);
    selectNumber(number)
  };

  useEffect(() => {
    if (!showPlayButton) {
      setClicked(false);
    }
  }, [showPlayButton]);

  return (
    <div
      className={`${styles.number} ${clicked && styles.clicked} ${!started && styles.nonClickable}`}
      onClick={() => numberSelect()}>
      {number}
    </div>
  );

};

export default Number;