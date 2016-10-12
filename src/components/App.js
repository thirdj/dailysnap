import React from 'react';
import { render } from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Login from './Login';
import Camera from './Camera';
import NotFound from './NotFound';

const App = ({ history }) => {
  return (
    <Router history={history}>
      <div>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/camera">Camera</Link></li>
        </ul>
        <hr />
        <Match exactly pattern="/" component={Login} />
        <Match pattern="/camera" component={Camera} />
        <Miss component={NotFound} />
      </div>
    </Router>
  );
};

export default App;
