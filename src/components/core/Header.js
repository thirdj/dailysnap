import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <a href="/" title="dailysnap">
            <div className="brand" />
            <span>Dailysnap</span>
          </a>
        </div>
        {/* <div className="title">
          <h1>Dailysnap</h1>
        </div> */}
        <div className="user">
          <span>profile</span>
        </div>
      </header>
    );
  }
}
