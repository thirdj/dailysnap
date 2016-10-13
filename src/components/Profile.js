import React, { Component } from 'react';
import { Button, Image } from 'semantic-ui-react';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.onLogout();
  }

  render() {
    console.log('Card render ', {state: this.state, props: this.props});
    const { user } = this.props;

    const Trigger = () => {
      return (
        <span>
          <Image avatar src={user.photoURL} />
          Hello, {user.displayName} &nbsp;
          <Button
            className="button"
            color="google plus"
            onClick={this.handleLogout}
          >Sign Out</Button>
        </span>
      );
    };

    return <Trigger />;
  }
}
