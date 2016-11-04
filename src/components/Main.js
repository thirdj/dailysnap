import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <main className="main">
        <section>
          <div className="row wave">
            여기는 음성을 말 했을때 파장이 나타날거야<br />
            https://github.com/CaffeinaLab/SiriWaveJS
          </div>
          <div className="row shot">
            여기는 카메라가 나오거야
          </div>
          <div className="row shot-list">
            여기는 사진 리스트가 나타날거야
          </div>
        </section>
      </main>
    );
  }
}
