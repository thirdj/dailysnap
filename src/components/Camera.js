import React, { Component } from 'react';
import Webcam from 'react-webcam';
import moment from 'moment';

import { database, timestamp } from '../firebaseInit';

const currentDate = moment().format('YYYYMMDD');

export default class Camera extends Component {
  constructor(props) {
    super(props);

    this.shot = this.shot.bind(this);

    this.state = { screenshot: null };
  }
  componentDidMount() {
    // this.listRender();
  }
  shot() {
    const screenshot = this.refs.webcam.getScreenshot(); // base64
    const currentTime = moment().format('HHmmss');
    const creation = moment().format('YYYY-MM-DD HH:mm:ss');
    const timestamp = moment().unix();
    const refTime = database.ref().child(`thirdj/${currentDate}/${currentTime}`);

    refTime.set({
      screenshot,
      creation,
      timestamp
    });

    this.setState({ screenshot });
  }
  listRender() {
    let snap = [];
    database.ref()
      .child(`thirdj/${currentDate}`)
      .on('value', function (snapshot) {

      var snapVal = snapshot.val();
      for (var key in snapVal) {
        snap.unshift(<img height={100} width={100} src={snapVal[key].screenshot} alt={snapVal[key].creation} />);
      }
    });

    if (!snap.length) {
      return <div>Wating...</div>;
    }

    return <ul>{ snap.map((data, idx) => <li key={idx} style={{ display: 'inline-block', padding: '0 20px' }}>{data}</li>) }</ul>;
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
        { this.listRender() }
      </div>
    );
  }
}
