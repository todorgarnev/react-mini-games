import React, { useState, useEffect } from 'react';
import styles from './Number.module.css';

const Number = (props) => {
  const [clicked, setClicked] = useState(false);

  const selectNumber = () => {
    setClicked(true);
    props.selectNumber(props.number)
  };

  return (
    <div
      className={`${styles.number} ${clicked && styles.clicked} ${!props.started && styles.nonClickable}`}
      onClick={() => selectNumber()}>
      {props.number}
    </div>
  );

};

export default Number;