import React, { Component, PropTypes } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Menu from '../../js/components/Global/Menu';

import Dashboard from '../Dashboard';
import About from '../About';
import NotFound from '../NotFound';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }


  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <Menu />

        <div className='Page'>
          { children }
        </div>

          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/about" component={About}/>
          <Route path='*' component={NotFound}/>
      </div>
    );
  }
}
