import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Login from './Login';
import Camera from './Camera';
import Speech from './Speech';

import NotFound from './NotFound';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <div style={{height: 'inherit'}}>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/camera">Camera</Link></li>
          <li><Link to="/speech">Speech</Link></li>
        </ul>
        <hr />
        <Match exactly pattern="/" component={Login} />
        <Match pattern="/camera" component={Camera} />
        <Match pattern="/speech" component={Speech} />
        <Miss component={NotFound} />
      </div>
    </Router>
  );
};

export default App;
