import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div class="">
        <div>
          <div class="p-container">
            <div className="a-wrapper">
              <div className="a-font">
              { 'I\'m a 24 year old programmer from Tracy California. I\'m a problem solver, a thinker, a DIY kind of guy (also works great in teams), and also very creative.' }
              </div>
            </div>
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
