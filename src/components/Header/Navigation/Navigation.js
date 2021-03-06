import React from 'react';
import styles from './Navigation.module.css';

import NavigationItem from './NavigationItem/NavigationItem';
import { gamesLink } from '../../../shared/constants/constants'

const Navigation = () => {
  return (
    <ul className={styles.navigation}>
      {gamesLink.map(game => <NavigationItem key={game.link} link={game.link}>{game.name}</NavigationItem>)}
    </ul>
  );
};

export default Navigation;