import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { provider, auth } from '../firebaseInit';
import Profile from './Profile';

provider.addScope('https://www.googleapis.com/auth/plus.login');

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleState = this.handleState.bind(this);
    this.user = null;

    this.state = { loggedIn: false };
  }

  handleLoginClick() {
    const user = auth.currentUser;

    if (user !== null) {
      this.handleState(true);
      this.user = user;
    } else {
      auth.signInWithPopup(provider).then(result => {
        // const token = result.credential.accessToken;
        this.user = result.user;

        this.handleState(true);
        // this.setState({ loggedIn: true });
      })
      .catch(error => {
        const { code, message, email, credential } = error;

        console.error(code, message, email, credential);
      });
    }
  }

  handleLogout() {
    auth.signOut().then(() => {
      console.info('Logout successful');
      // Sign-out successful.
      window.location.reload();
    }, error => {
      // An error happened.
      console.error('Logout fail', error);
    });
    // this.handleState(false);
  }

  handleState(loggedIn) {
    console.log('loggedIn  ', loggedIn);
    this.setState({ loggedIn });
  }

  handleViewUser(user) {
    return this.state.loggedIn ? <Profile user={user} onLogout={this.handleLogout} /> : '';
  }

  render() {
    console.log('Login render ', {state: this.state, props: this.props});

    const view = this.state.loggedIn
      ? this.handleViewUser(this.user) :
        <Button color="google plus" className="button" onClick={this.handleLoginClick}>
          <Icon name="google plus" />Enter
        </Button>;
    return (
      <div className="container">
        {view}
      </div>
    );
  }
}
