import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { database } from '../firebaseInit';
import moment from 'moment';

export default class Camera extends Component {
  constructor(props) {
    super(props);

    this.shot = this.shot.bind(this);

    this.state = { screenshot: null }
  }
  shot() {
    const currentDate = moment().format("YYYYMMDD");
    const currentTime = moment().format("HHmmss");
    const screenshot = this.refs.webcam.getScreenshot(); // base64
    /*
    email
      currentDate
        shot time
    */
    database.ref().child(`thirdj/${currentDate}/${currentTime}`).set(screenshot);
    // child('images/' + file.name).put(file, metadata);
    this.setState({ screenshot });
  }
  render() {
    return (
      <div>
        <Webcam
          ref='webcam'
          width='350'
          height='400'
        />
        <button onClick={this.shot}>screenshot</button>
        { this.state.screenshot ? <img src={this.state.screenshot} /> : null }
      </div>
    );
  }
}
