import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

import gameLogo from '../../../assets/images/game-logo.png';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src={gameLogo} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;