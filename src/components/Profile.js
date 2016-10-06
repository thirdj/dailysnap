import React, { Component } from 'react';
import { Dropdown, Image } from 'semantic-ui-react'
// import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    console.log('11111');
    this.props.onLogout();
  }

  render() {
    console.log('Card render ', {state: this.state, props: this.props});
    const { user } = this.props;

    const trigger = (
      <span>
        <Image avatar src={user.photoURL} />
        Hello, {user.displayName}
      </span>
    );

    const DropdownTriggerExample = () => (
      <Dropdown trigger={trigger}>
        <Dropdown.Menu>
          <Dropdown.Item disabled>
            Signed in as <strong>{user.displayName}</strong>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Your Profile</Dropdown.Item>
          <Dropdown.Item>Your Stars</Dropdown.Item>
          <Dropdown.Item>Explore</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item onClick={this.handleLogout}>Sign Out</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );

    return <DropdownTriggerExample />;
  }
}
