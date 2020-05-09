import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.headerContainer}>
      <ul className={styles.header}>
        <NavLink to="/" className={styles.headerItem}>HOME</NavLink>
        <NavLink to="/troll" className={styles.headerItem}>Troll game</NavLink>
        <NavLink to="/dragon" className={styles.headerItem}>Slaying the dragon</NavLink>
        <NavLink to="/" className={styles.headerItem}>Rock, paper, scissors</NavLink>
        <NavLink to="/" className={styles.headerItem}>The target sum</NavLink>
      </ul>
    </nav>
  );
};

export default Header;