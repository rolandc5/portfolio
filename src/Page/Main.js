import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Global.css';

export default class Main extends Component {
  render() {
    return (
      <div class="m-container">
          <div class="m-wrapper">
            <div>
              <div class="m-firstLine">
                <div><img class="m-profilePicture" alt="this is an avatar" src={ require("./picture.png") }/></div>
                <header class="m-headerFont">Roland Canuto</header>
              </div>
              <div class="m-secondLine">
                <Link to="/about" class=" m-menuFont">about</Link>
                <div class="m-spaceRight"/>
                <Link to="/project" class="m-menuFont">projects</Link>
                <div class="m-spaceLeft"/>
                <Link to="/contact" class=" m-menuFont">contact</Link>
              </div>
            </div>
          </div>
      </div>
    )
 }
}

/*
*/
