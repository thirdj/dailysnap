import React, { Component } from 'react';

class Speech extends Component {

  const data = document.querySelector('p#data');

  function log(message) {
    data.innerHTML = message + '<br><br>' + data.innerHTML;
  }

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
    for (const i = event.resultIndex; i !== results.length; ++i) {
      let result = results[i];
      // once speaking/recognition stops, a SpeechRecognitionEvent
      // is fired with a single result, for which isFinal is true
      if (result.isFinal) {
        log('Final transcript: ' + results[0][0].transcript);
        recognition.stop();
      } else {
        interimTranscript += result[0].transcript;
        log('Interim transcript: ' + interimTranscript);
      }
    }
  };

  recognition.onend = function() {
    log('Recognition ended.');
  };

  recognition.onerror = function(event) {
    log('Error: ' + event.error);
  };

  const startButton = document.querySelector('button#startButton');
  startButton.onclick = function() {
    recognition.start();
  };

  render() {
    return (
      <div>
        <button id="startButton"></button>
        Speeeeeeeeech!!!!
      </div>
    );
  };
}

export default Speech;
