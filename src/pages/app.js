// application's entry

import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {AppContainer} from 'react-hot-loader';
import reducers from 'js/reducers/index';
import '../css/common.scss';

// pages
import Page1 from './page1/index';
import Page2 from './page2/index';
import Page3 from './page3/index';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Home = () => (
  <div>
    <h2>Home12dsssssdddd3</h2>
  </div>
)

class Application extends Component {

  render() {
    return (
      <Router>
        <div>
          <div className="header">
            <Link to="page1">page1</Link>
            <Link to="page2">page442</Link>
            <Link to="page3">page3</Link>

            <Link to="about">About</Link>
            <Link to="/">HOME111333</Link>
          </div>
          <hr/>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    );
  }
}


const store = createStore(reducers, {}, applyMiddleware(thunk));

const render1 = Component => {
  render(
    <AppContainer>
    <Component/>
  </AppContainer>, document.getElementById('root'))
}

render1(Application);

if (module.hot) {
  module
    .hot
    .accept('./app', () => render1(Application));
}
