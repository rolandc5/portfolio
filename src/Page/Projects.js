import React, { Component } from 'react';
import Popup from "reactjs-popup";
import './Global.css';


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
  }

  handleButtonPress(e) {
    let number = this.state.number;
    const name = e.target.name;
    if (this.state.file.length === number + 1) {
      this.setState({ number: 0 });
      return;
    }
    if(name === 'next') {
      number++
      this.setState({ number });
      return;
    }
  }

  openModal = () => {
  this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false });
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
                          { this.state.file.map((value, i) => {
                             return (
                               <div>
                                { this.state.number === i ? <div className="p-hContainer"><button className="p-buttonModal" onClick={ this.openModal }><img className="p-projectImage animated fadeIn" src={ value.picture }/></button></div>: null }
                               </div>
                             )
                          })}
                      </div>
                  </div>
                </div>
              </div>
              <div style={{ height: 20 }}/>
            </div>
            <div>
              <div className="p-changeProjectB">
                <button className="g-f p-introSLine" name="next" onClick={ this.handleButtonPress }> Next </button>
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

{ this.state.number === 0 ? <div className="p-hContainer"><img className="p-projectImage animated fadeIn " src={ this.state.file[0] }/> : null }
{ this.state.number === 1 ? <div className="p-hContainer"><img className="p-projectImage animated fadeIn " src={ this.state.file[0] }/> : null }
{ this.state.number === 2 ? <div className="p-hContainer"><img className="p-projectImage animated fadeIn " src={ this.state.file[0] }/>  : null }
{ this.state.number === 3 ? <div className="p-hContainer"><img className="p-projectImage animated fadeIn " src={ this.state.file[0] }/>  : null }

  <img className="p-projectImage" src={ require('./image.png')}/>
  <div>
    <div className="p-container">
      <div className="p-wrapper">
        <div className="p-innerContainer">
          <div>
            <div style={{ height: 150 }}/>
            <div className="g-f p-introFont">
              <span> Check out some of my work </span>
            </div>
            <div style={{ height: 25 }}/>
            <div className="p-introStyle">
              <div className="g-f p-introSLine">
                Front-End
              </div>
              <div style={{ width: 25 }}/>
              <div className="g-f p-introSLine">
                Back-End/API
              </div>
              <div style={{ height: 25 }}/>
            </div>
          <div style={{ height: 150 }}/>
          </div>
          <div>

            <div className="p-projectContainer">
              <div className="p-innerProjectContainer">

                      <div>
                        <img className="p-projectImage" src={ require('./image.png')}/>
                      </div>

              </div>
            </div>

          </div>
        <div style={{ height: 90 }}/>
        </div>
      </div>
    </div>
  </div>

*/
