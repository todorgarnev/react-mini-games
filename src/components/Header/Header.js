import React from 'react';
import styles from './Header.module.css';

import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;