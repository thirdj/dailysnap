import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './components/App';

const Root = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

let rootElement = document.getElementById('root');

render (
  <Root/>,
  rootElement
);
