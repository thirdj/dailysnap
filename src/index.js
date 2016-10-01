import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Login from './components/Login';
import Camera from './components/Camera';

// onTouchTap Issue
injectTapEventPlugin();

const Root = () => (
  <MuiThemeProvider>
    <Camera />
  </MuiThemeProvider>
);

let rootElement = document.getElementById('root');

render (
  <Root/>,
  rootElement
);
