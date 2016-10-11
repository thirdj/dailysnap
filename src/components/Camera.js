import React, { Component } from 'react';
import Webcam from 'react-webcam';
// https://github.com/cezary/react-webcam

// import 'babel-polyfill';
import { database } from '../firebaseInit';
import moment from 'moment';

import Cssgram from '../libs/Cssgram';

const currentDate = moment().format('YYYYMMDD');
const refSettings = database.ref().child(`thirdj/${currentDate}/settings`);
let setCss;

export default class Camera extends Component {
  constructor(props) {
    super(props);

    this.shot = this.shot.bind(this);

    this.state = { screenshot: null };
  }

  componentDidMount() {
    // this.interval();
  }
/*
  async interval() {
    // TODO: async await 사용해서 noti 이후 사진을 찍자.
    // setInterval(() => {
    await this.getNotificationGranted();
    await sleep(5000);
    await this.shot();
    await sleep(5000);
    // }, 5000);
  }
*/
  // TODO: db 에서 시간을 받아와서 동작 해야 함.
  // TODO: 클릭 했을때 현재 탭으로 돌아가야 함.
  getNotificationGranted() {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    } else if (Notification.permission === 'granted') {
      this.notification();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function(permission) {
        if (!('permission' in Notification)) {
          Notification.permission = permission;
        }
        if (permission === 'granted') {
          this.notification();
        }
      });
    }
  }

  notification() {
    const options = {
      body: '5초 후에 사진 찍을거야!! 돌아와!!!',
      icon: '//simpl.info/notification/icon.png',
      tag: 'foo',
      type: 'basic'
    };
    const n = new Notification('Greetings from dailysnap!', options);
    n.onclick = function() {
      console.log('Clicked.');
    };
    n.onclose = function() {
      console.log('Closed.');
    };
    n.onshow = function() {
      console.log('Shown.');
    };
  }

  shot() {
    const screenshot = this.webcam.getScreenshot(); // base64
    const currentTime = moment().format('HHmmss');
    const creation = moment().format('YYYY-MM-DD HH:mm:ss');
    const timestamp = moment().unix();
    const refTime = database.ref().child(`thirdj/${currentDate}/${currentTime}`);
    const randomCss = Math.floor(Math.random() * Cssgram.length);

    setCss = Cssgram[randomCss];

    refSettings.set({
      keyword: '안녕, 대리님, 주임님, 과장님'
    });

    refTime.set({
      screenshot,
      creation,
      timestamp,
      cssgram: Cssgram[randomCss]
    });

    this.setState({ screenshot });
  }

  listRender() {
    console.log('listRender ');
    let snap = [];

    database.ref().child(`thirdj/${currentDate}`).on('value', snapshot => {
      const snapVal = snapshot.val();

      for (const key in snapVal) {
        if (snapVal[key].screenshot === undefined) return false;
        snap.unshift(
          <img
            height={100} width={100} className={snapVal[key].cssgram}
            src={snapVal[key].screenshot} alt={snapVal[key].creation}
          />
        );
      }
    });
    if (!snap.length) {
      return <div>Wating...</div>;
    }

    return <ul>{ snap.map((data, idx) => <li key={idx} className="lists">{data}</li>) }</ul>;
  }

  render() {
    console.log('Camera render ', {state: this.state, props: this.props});
    return (
      <div>
        <Webcam
          ref={ref => { this.webcam = ref; }}
          width='350' height='400'
        />
        <button onClick={this.shot}>screenshot</button>
        { this.state.screenshot ? <img src={this.state.screenshot} className={setCss} /> : null }
        { this.listRender() }
      </div>
    );
  }
}

// https://zeit.co/blog/async-and-await
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
