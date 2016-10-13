import React, { Component } from 'react';

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'ko-KR';

recognition.onresult = function(event) {
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
      recognition.stop();
    } else {
      interimTranscript += result[0].transcript;
      console.log(`Interim transcript:  ${interimTranscript}`);
    }
  }
};

recognition.onend = function() {
  console.log('Recognition ended.');
};

recognition.onerror = function(event) {
  console.log(`Error  ${event.error}`);
};


class Speech extends Component {

  // const data = document.querySelector('p#data');
  //
  // function log(message) {
  //   data.innerHTML = message + '<br><br>' + data.innerHTML;
  // }

  render() {
    const startButton = document.querySelector('button#startButton');
    startButton.onclick = function() {
      recognition.start();
    };

    return (
      <div>
        <button id="startButton"></button>
        Speeeeeeeeech!!!!
      </div>
    );
  }
}

export default Speech;
