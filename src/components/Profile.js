import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class Profile extends Component {

  render() {
    console.log('Card render ', {state: this.state, props: this.props});
    const { user } = this.props;
    var user = this.props.user;
    return(
      <Card className="card">
        <CardHeader
          title={user.displayName}
          subtitle={user.email}
          avatar={user.photoURL}
        />
        <CardMedia
          overlay={<CardTitle title={user.displayName} subtitle={user.email} />}
        >
          <img src={user.photoURL} />
        </CardMedia>
      </Card>
    );
  }
}
