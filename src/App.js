import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../src/pages/home'
import { Account } from '../src/pages/account-profile'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/account" component={Account} />
      </Switch>
    </Router>
  );
}

export default App;
