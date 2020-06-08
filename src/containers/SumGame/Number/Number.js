import React, { useState } from 'react';
import styles from './Number.module.css';

const Number = (props) => {
  const [clicked, setClicked] = useState(false);

  const click = () => {
    setClicked(true);
    props.selectNumber(props.number)
  };

  return (
    <div className={`${styles.number} ${clicked && props.started && styles.clicked}`} onClick={() => click()}>
      {props.number}
    </div>
  );

};

export default Number;