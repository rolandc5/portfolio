import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
  render() {
    return (
      <div class="">
        <div>
          <div class="c-container">
            Facebook
            Github
            Linkedin
          </div>
        </div>
      </div>
    )
  }
}

/*
          <div class="menu-container">
            <div class="m-secondLine">
              <Link to="/about" class="m-menuFont">about</Link>
              <div class="m-spaceRight"/>
              <Link to="/project" class="m-menuFont">projects</Link>
              <div class="m-spaceLeft"/>
              <Link to="/contact" class=" m-menuFont  menu-bBorder">contact</Link>
            </div>
          </div>
*/