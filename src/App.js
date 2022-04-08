import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Main';
import Pokemon from './Pokemon';
import NotFound from './NotFound';

export default function App() {
  return (
    <div className="app-routes">
      <Header />
      <Navigation />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path='/search'>
            <Pokemon />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}