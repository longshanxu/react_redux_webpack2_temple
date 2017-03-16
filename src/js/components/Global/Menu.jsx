import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { routeCodes } from '../../../routes';

export default class Menu extends Component {

  render() {
    return (
      <div className='Menu'>
        <Link to="/dashboard">
          Dashboard
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to='404'>
          404
        </Link>
      </div>
    );
  }
}
