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
    let user;
    Firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      this.user = result.user;

      this.setState({ loggedIn: true });
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });

    // this.handleViewUser(user);
  }

  handleViewUser(user) {
    console.log('handleViewUser user  ', user);
    console.log('this.state.loggedIn ', this.state.loggedIn);
    return this.state.loggedIn ? <Profile user={user} /> : '';
  }

  render() {
    console.log('Login render ', {state: this.state, props: this.props});
    const isLogin = this.state.loggedIn ? 'Logout' : 'Login';
    const view = this.state.loggedIn ? this.handleViewUser(this.user) : <RaisedButton label={isLogin} className="button" onClick={this.handleLoginClick}/>;
    return (
      <div className="container">
        {view}
      </div>
    );
  }
}
