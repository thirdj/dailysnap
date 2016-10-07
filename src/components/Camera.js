import React, { Component } from 'react';
import Webcam from 'react-webcam';
import moment from 'moment';

import { database, timestamp } from '../firebaseInit';

const currentDate = moment().format('YYYYMMDD');
const refsettings = database.ref().child(`thirdj/${currentDate}/settings`);
const classes = [
  '_1997', 'moon', 'aden', 'nashville', 'brooklyn', 'clarendon', 'earlybird',
  'hudson', 'inkwell', 'lark', 'lofi', 'mayfair', 'perpetua', 'reyes',
  'rise', 'slumber', 'toaster', 'walden', 'willow', 'xpro2', 'gingham'
];
let setCss;

export default class Camera extends Component {
  constructor(props) {
    super(props);

    this.shot = this.shot.bind(this);

    this.state = { screenshot: null };
  }

  shot() {
    const screenshot = this.refs.webcam.getScreenshot(); // base64
    const currentTime = moment().format('HHmmss');
    const creation = moment().format('YYYY-MM-DD HH:mm:ss');
    const timestamp = moment().unix();
    const refTime = database.ref().child(`thirdj/${currentDate}/${currentTime}`);
    const randomCss = Math.floor(Math.random() * classes.length);

    setCss = classes[randomCss];

    refsettings.set({
      keyword: '안녕, 대리님, 주임님, 과장님'
    });

    refTime.set({
      screenshot,
      creation,
      timestamp,
      cssgram: classes[randomCss]
    });

    this.setState({ screenshot });
  }

  listRender() {
    let snap = [];

    database.ref().child(`thirdj/${currentDate}`).on('value', function (snapshot) {
      var snapVal = snapshot.val();

      for (var key in snapVal) {
        if (snapVal[key].screenshot === undefined) return false;
        snap.unshift(<img height={100} width={100} className={snapVal[key].cssgram} src={snapVal[key].screenshot} alt={snapVal[key].creation} />);
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
        { this.state.screenshot ? <img src={this.state.screenshot} className={setCss} /> : null }
        { this.listRender() }
      </div>
    );
  }
}
