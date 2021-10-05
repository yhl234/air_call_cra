import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import Activity from './components/Activity';

const App = () => (
  <div className="container">
    <div className="container-view">
      <Header />
      <Router>
        <Switch>
          <Route path="/activity" exact>
            <Activity />
          </Route>
          <Route path="/archive" exact>
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <Users />
          </Route>
        </Switch>
        <BottomNav />
      </Router>
    </div>
  </div>
);

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
