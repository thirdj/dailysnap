import React, { Component } from 'react';
import { RaisedButton } from 'material-ui';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick() {
    alert('하자. 로그인!');
  }

  render() {
    return (
      <div className="container">
        <RaisedButton label="Login" className="button" onClick={this.handleLoginClick}/>
      </div>
    );
  }
}
