import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';
import Firebase from 'firebase';

import Profile from './Profile';
import firebaseConfig from '../firebase.config.js';

const provider = new Firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/plus.login');
Firebase.initializeApp(firebaseConfig);

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleViewUser = this.handleViewUser.bind(this);
    this.user = null;

    this.state = { loggedIn: false };
  }

  handleLoginClick() {
    Firebase.auth().signInWithPopup(provider).then(result => {
      const token = result.credential.accessToken;
      this.user = result.user;

      this.setState({ loggedIn: true });
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;

      // const { code, message, email, credential } = error;

      console.error(errorCode, errorMessage, email, credential);
    });
  }

  handleViewUser(user) {
    return this.state.loggedIn ? <Profile user={user} /> : '';
  }

  render() {
    console.log('Login render ', {state: this.state, props: this.props});

    const view = this.state.loggedIn
      ? this.handleViewUser(this.user)
      : <RaisedButton label="Login" className="button" onClick={this.handleLoginClick}/>;

    return (
      <div className="container">
        {view}
      </div>
    );
  }
}
