import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import App from 'views/App';
import Dashboard from 'views/Dashboard';
import About from 'views/About';
import NotFound from 'views/NotFound';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${publicPath}about`
};

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={App}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/about" component={About}/>
          <Route path='*' component={NotFound}/>
        </div>
      </Router>
    );
  }
}
