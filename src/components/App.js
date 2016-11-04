import React, { Component } from 'react';
// import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

// import Login from './Login/Login';
// import Camera from './Camera';
// import Speech from './Speech';
import Header from './core/Header';
import Main from './Main';
import Footer from './core/Footer';


// import NotFound from './core/NotFound';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
      // <Router history={history}>
      //   <div style={{height: 'inherit'}}>
      //     <ul>
      //       <li><Link to="/"><span>Login</span></Link></li>
      //       <li><Link to="/camera"><span>Camera</span></Link></li>
      //       <li><Link to="/speech"><span>Speech</span></Link></li>
      //     </ul>
      //     <hr />
      //     <Match exactly pattern="/" component={Header} />
      //     <Match pattern="/camera" component={Camera} />
      //     <Match pattern="/speech" component={Speech} />
      //     <Miss component={NotFound} />
      //   </div>
      // </Router>
    );
  }
}
