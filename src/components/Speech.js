import React, { Component } from 'react';

// TODO: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
// TODO: http://blog.embian.com/120 스마트 미러

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const data = this.refs.datas;
//
// function log(message) {
//   data.innerHTML = `${message} \n\n ${data.innerHTML}`;
// }

const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'ko-KR';

recognition.onresult = event => {
  const results = event.results;

  // results is an array of SpeechRecognitionResults
  // each of which is an array of SpeechRecognitionAlternatives
  // in this demo, we only use the first alternative
  let interimTranscript = '';
  for (let i = event.resultIndex; i !== results.length; ++i) {
    const result = results[i];
    // once speaking/recognition stops, a SpeechRecognitionEvent
    // is fired with a single result, for which isFinal is true

    if (result.isFinal) {
      console.log(`Final transcript:  ${results[0][0].transcript}`);
      // recognition.stop();
    } else {
      interimTranscript += result[0].transcript;
      // log(`Interim transcript:  ${interimTranscript}`);
      console.log(`Interim transcript:  ${interimTranscript}`);
    }
  }
};

recognition.onend = () => {
  console.log('Recognition ended.');
};

recognition.onerror = event => {
  console.log(`Error  ${event.error}`);
};

class Speech extends Component {

  handleStartRecognition() {
    recognition.start();
  }

  render() {
    return (
      <div>
        <button id="startButton" onClick={this.handleStartRecognition}>START</button>
        <br />
        <p id="data" ref="datas"></p>
      </div>
    );
  }
}

export default Speech;
