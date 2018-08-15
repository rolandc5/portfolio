import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Global.css';
import './Mobile.css';

export default class Main extends Component {
  render() {
    return (
      <div className="m-container">
          <div className="m-wrapper">
            <div>
              <div className="m-mobileHeight"/>
              <div className="m-firstLine">
                <div><img className="m-profilePicture" alt="this is an avatar" src={ require("./picture.png") }/></div>
                <div className="m-avatarSpace"/>
                <div><header className="m-headerFont">Roland Canuto</header></div>
              </div>
              <div>
                <div className="m-spaceHeight"/>
                <div className="m-secondLine">
                  <span><Link to="/about" className="m-menuFont">about</Link></span>
                  <span className="m-space"/>
                  <span><Link to="/project" className="m-menuFont">projects</Link></span>
                  <span className="m-space"/>
                  <span className="m-menuFont">blog</span>
                  <span className="m-space"/>
                  <span><Link to="/contact" className=" m-menuFont">contact</Link></span>
                </div>
              </div>
            </div>
            <div className="m-mobileBottomSpace"/>
          </div>
      </div>
    )
 }
}
