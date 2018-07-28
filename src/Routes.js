import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Dates from './pages/Dates';
import Profile from './pages/Profile';

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dates">Dates</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

      <Route exact path="/" component={LandingPage} />
      <Route exact path="/dates" component={Dates} />
      <Route exact path="/profile" component={Profile} />
    </div>
  </Router>
)

export default Routes;