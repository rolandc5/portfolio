import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div class="">
        <div>
          <div class="a-container">
            Hello my name is Roland Canuto, I am an aspirigin software developer.
          </div>
        </div>
      </div>
    )
  }
}


/*
 <div class="menu-container">
            <div class="m-secondLine">
              <Link to="/about" class="m-menuFont menu-bBorder">about</Link>
              <div class="m-spaceRight"/>
              <Link to="/project" class="m-menuFont">projects</Link>
              <div class="m-spaceLeft"/>
              <Link to="/contact" class=" m-menuFont">contact</Link>
            </div>
          </div>
*/