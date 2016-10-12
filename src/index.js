import React from 'react';
import { render } from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
//
// import Login from './components/Login';
// import Camera from './components/Camera';
import App from './components/App';

// onTouchTap Issue
// injectTapEventPlugin();

/*
const Root = () => {
  return (
    <div>
      <Router>
        <div>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/camera">Camera</Link></li>
          </ul>
          <hr />
          <Match exactly pattern="/login" component={Login}>Login</Match>
          <Match pattern="/camera" component={Camera}>Camera</Match>
        </div>
      </Router>
    </div>
  );
};
*/

let rootElement = document.getElementById('root');

render (
  <App/>,
  rootElement
);

/*

1. 모든건 컴포넌트입니다.
2. 로케이션은 방문자가 어떤 곳에서 있는지 혹은 어딜 갈 것인지 알려주는 데이터 임.
3. Match 는 location 에 따라 UI 를 보여줍니다.
*/
