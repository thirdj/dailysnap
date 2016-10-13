import React from 'react';
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
          <li><Link to="/"><span>Login</span></Link></li>
          <li><Link to="/camera"><span>Camera</span></Link></li>
          <li><Link to="/speech"><span>Speech</span></Link></li>
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
