import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { database } from '../firebaseInit';
import moment from 'moment';

const currentDate = moment().format('YYYYMMDD');
const creation = moment().format('YYYY-MM-DD HH:mm:ss');

export default class Camera extends Component {
  constructor(props) {
    super(props);

    this.shot = this.shot.bind(this);

    this.state = { screenshot: null }
  }
  shot() {
    const screenshot = this.refs.webcam.getScreenshot(); // base64
    const currentTime = moment().format('HHmmss');
    /*
    email
      currentDate
        shot time
    */
    database.ref().child(`thirdj/${currentDate}/${currentTime}/image`).set(screenshot);
    database.ref().child(`thirdj/${currentDate}/${currentTime}/creation`).set(creation);
    // child('images/' + file.name).put(file, metadata);
    this.setState({ screenshot });
  }
  render() {

    database.ref().child('thirdj').on('value', function (snapshot) {

      var snapVal = snapshot.val();
      //console.log("snapshot.val()", snapVal);
      var count = 0;
      var chartArray = [];
      chartArray.push(['Time', 'thirdj']);
      for (var key in snapVal) {
          //key는 유저 id
          if (snapVal.hasOwnProperty(key)) {
              console.log("key/value", key, snapVal[key]);
              for (var obj in snapVal[key]) {
                  var thirdj = snapVal[key][obj];
                  chartArray.push([count++, thirdj]);
              }
          }
      }

      console.log('chartArray ', chartArray);
    });

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
