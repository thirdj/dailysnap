import React, { Component } from 'react';

export default class Camera extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    const video = document.querySelector('video');
    const canvas = window.canvas = document.querySelector('canvas');
    canvas.width = 480;
    canvas.height = 360;

    const button = document.querySelector('button');
    button.onclick = function() {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d').
        drawImage(video, 0, 0, canvas.width, canvas.height);
    };

    const constraints = {
      audio: false,
      video: true
    };

    function handleSuccess(stream) {
      window.stream = stream; // make stream available to browser console
      video.srcObject = stream;
    }

    function handleError(error) {
      console.log('navigator.getUserMedia error: ', error);
    }

    navigator.mediaDevices.getUserMedia(constraints).
        then(handleSuccess).catch(handleError);
  }
  render() {
    return (
      <div>
        <video autoplay></video>
        <button>Take snapshot</button>
        <canvas></canvas>
      </div>
    );
  }
}
