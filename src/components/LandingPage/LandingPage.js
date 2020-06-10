import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LandingPage.module.css';

import { gamesLink } from '../../shared/constants/constants';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <h2>Everybody loves games</h2>
      <div className={styles.games}>
        {gamesLink.map((game, index) => <NavLink className={styles.gameButton} to={game.link} key={index}>{game.name}</NavLink>)}
      </div>
    </div>
  );
};

export default LandingPage;