import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';

injectTapEventPlugin();
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
