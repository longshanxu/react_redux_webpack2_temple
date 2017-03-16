import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import App from 'views/App';


export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={App}></Route>
        </div>
      </Router>
    );
  }
}
