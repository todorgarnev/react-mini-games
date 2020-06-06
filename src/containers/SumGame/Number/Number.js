import React from 'react';
import styles from './Number.module.css';

const Number = (props) => (
  <div className={styles.number}>
    {props.number}
  </div>
);

export default Number;