import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.headerContainer}>
      <ul className={styles.header}>
        <Link to="/" className={styles.headerItem}>HOME</Link>
        <Link to="/troll" className={styles.headerItem}>Troll game</Link>
        <Link to="/dragon" className={styles.headerItem}>Slaying the dragon</Link>
        <Link to="/" className={styles.headerItem}>Rock, paper, scissors</Link>
        <Link to="/" className={styles.headerItem}>The target sum</Link>
      </ul>
    </nav>
  );
};

export default Header;