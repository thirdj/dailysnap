import React, { Component } from 'react';
import $ from 'jquery';

const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let localMediaStream = null;
const width = 350;
const height = 260;
const classes = [
  '_1997', 'moon', 'aden', 'nashville', 'brooklyn', 'clarendon', 'earlybird',
  'hudson', 'inkwell', 'lark', 'lofi', 'mayfair', 'perpetua', 'reyes',
  'rise', 'slumber', 'toaster', 'walden', 'willow', 'xpro2', 'gingham'
];

export default class Camera extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.navigator = window.navigator || {};
    navigator.getUserMedia = navigator.getUserMedia       ||
                             navigator.webkitGetUserMedia ||
                             navigator.mozGetUserMedia    ||
                             null;
  }

  handleStartWebcam() {
    navigator.getUserMedia({video: true}, stream => {
      video.src = window.URL.createObjectURL(stream);
      localMediaStream = stream;
    }, error);
  }

  handleShot() {
    if (localMediaStream) {
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(video, 0, 0, width, height);

      insertImg(canvas.toDataURL('image/png'));
    }
  }
  render() {
    return (
      <div className="camera">
        <h1 onClick={this.handleShot()}>Camera</h1>
        <video></video>
        <canvas></canvas>
        <button id="start" ref="start" onClick={this.handleStartWebcam}>Start</button>
        <div id="images" ref="images"></div>
      </div>
    );
  }
}

function snapshot() {
  if (localMediaStream) {
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(video, 0, 0, width, height);

    insertImg(canvas.toDataURL('image/png'));
  }
}
function insertImg(imgData) {
  var result = Math.floor(Math.random() * classes.length);
  $('#images').prepend(`<img src=${imgData} class=${classes[result]} />`);
}

function error(err) {
  console.log('error', arguments);
}
