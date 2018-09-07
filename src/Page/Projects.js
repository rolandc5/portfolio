import React, { Component } from 'react';
import './Global.css';

import * as Map from './Map.js';

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      file: [
        { picture: require('./website2.png')},
        { picture: require('./website3.png') },
        { picture: require('./website4.png') },
      ],
      number: 0,
      open: false,
    }
    this.handleButtonPress = this.handleButtonPress.bind(this);
  };

  handleButtonPress(e) {
    let number = this.state.number;
    const name = e.target.name;
    if (this.state.file.length === number + 1) {
      this.setState({ number: 0 });
      return;
    }
    number++
    this.setState({ number });
    return;
  };

  render() {
    return (
      <div className="p-container">
        <div className="p-wrapper">
          <div className="p-innerContainer">

            <div style={{ height: 150 }}/>
            <div>
              <div className="g-f p-introFont">
                <span> Check out some of my work </span>
              </div>
              <div style={{ height: 25 }}/>
              <div className="p-introStyle">
                <div className="g-f p-introSLine">Front-End</div>
                <div style={{ width: 25 }}/>
                <div className="g-f p-introSLine">Back-End/API</div>
              </div>
              <div style={{ height: 25 }}/>
            </div>
            <div style={{ height: 150 }}/>

            <div>
              <div className="p-projectContainer">
                <div className="p-projectWrapper">
                  <div className="p-innerProjectContainer">
                      <div>
                        <div>
                          <div className="p-topBImage">
                            <div style={{ width: 10 }}/>
                            <div className="p-button p-colorR"/>
                            <div style={{ width: 10 }}/>
                            <div className="p-button p-colorB"/>
                            <div style={{ width: 10 }}/>
                            <div className="p-button p-colorG"/>
                          </div>
                        </div>
                        <Map.Project projects={ this.state.file } number={ this.state.number } press={ this.handleButtonPress }/>
                      </div>
                  </div>
                </div>
              </div>
              <div style={{ height: 20 }}/>
            </div>
            <div>

              <div className="p-changeProjectB">
                <a className="g-f p-introSLine p-links" href="https://pass-client.herokuapp.com/"> Link </a>
                <div style={{ width: 20 }}/>
                <div className="g-f p-change"/>
                <div style={{ width: 20 }}/>
                <a className="g-f p-introSLine p-links" href="https://github.com/rolandc5/password-client/tree/modalBranch"> Code </a>

              </div>
            <div style={{ height: 100 }}/>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

/*

*/
