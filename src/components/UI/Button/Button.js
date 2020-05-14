import React from 'react';
import styles from './Button.module.css';

const Button = props => (
  <button className={styles.button} onClick={props.click}>{props.children}</button>
);

export default Button;