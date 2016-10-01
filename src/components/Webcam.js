import React, { Component } from 'react';
import Webcam from 'react-webcam';

export default class Webcam extends Component {
  constructor(props) {
    super(props);

    this.shot = this.shot.bind(this);

    this.state = { screenshot: null }
  }
  shot() {
    const screenshot = this.refs.webcam.getScreenshot();

    this.setState({ screenshot });
  }
  render() {
    return (
      <div>
        <Webcam ref="webcam" />
        <button onClick={this.shot}>screenshot</button>
        { this.state.screenshot ? <img src={this.state.screenshot} /> : null }
      </div>
    );
  }
}
