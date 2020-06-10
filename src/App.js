import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage';
import Header from './components/Header/Header';
const TrollGame = React.lazy(() => import('./containers/TrollGame/TrollGame'));
const DragonGame = React.lazy(() => import('./containers/DragonGame/DragonGame'));
const RockPaperScissors = React.lazy(() => import('./containers/RockPaperScissors/RockPaperScissors'));
const SumGame = React.lazy(() => import('./containers/SumGame/SumGame'));

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/trollgame" component={TrollGame} />
      <Route path="/slayingdragon" component={DragonGame} />
      <Route path="/rockpaperscissors" component={RockPaperScissors} />
      <Route path="/targetsum" component={SumGame} />
    </Switch>
  );

  return (
    <div className="app">
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        {routes}
      </Suspense>
    </div>
  );
}

export default App;
