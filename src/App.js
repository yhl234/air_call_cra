import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Activity from './components/Activity';

const App = () => (
  <div className="container">
    <Header />
    <div className="container-view">
      <Router>
        <Switch>
          <Route path="/activity" exact>
            <Activity />
          </Route>
          <Route path="*">
            <Activity />
          </Route>
        </Switch>
      </Router>
    </div>
  </div>
);

export default App;
