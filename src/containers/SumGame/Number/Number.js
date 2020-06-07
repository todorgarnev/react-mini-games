import React from 'react';
import styles from './Number.module.css';

const Number = (props) => (
  <div className={styles.number} onClick={() => props.clicked(props.number)}>
    {props.number}
  </div>
);

export default Number;