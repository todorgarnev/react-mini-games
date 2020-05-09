import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import styles from './GameContainer.module.css';

const TrollGame = React.lazy(() => import('../../containers/TrollGame/TrollGame'));
const DragonGame = React.lazy(() => import('../../containers/DragonGame/DragonGame'));

const GameContainer = () => {
  const routes = (
    <React.Fragment>
      <Route path="/troll" component={TrollGame} />
      <Route path="/dragon" component={DragonGame} />
    </React.Fragment>
  );

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        {routes}
      </Suspense>
    </div>
  );
};

export default GameContainer;