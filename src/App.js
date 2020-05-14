import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const TrollGame = React.lazy(() => import('./containers/TrollGame/TrollGame'));
const DragonGame = React.lazy(() => import('./containers/DragonGame/DragonGame'));
const RockPaperScissors = React.lazy(() => import('./containers/RockPaperScissors/RockPaperScissors'));

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact>Landing page will be added..</Route>
      <Route path="/trollgame" component={TrollGame} />
      <Route path="/slayingdragon" component={DragonGame} />
      <Route path="/rockpaperscissors" component={RockPaperScissors} />
    </Switch>
  );

  return (
    <div className="app">
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        {routes}
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
