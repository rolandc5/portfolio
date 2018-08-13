import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div class="">
        <div>
          <div class="p-container">
            <div className="c-linkCol">
            <a href="https://www.facebook.com/roland.canuto"><img className="c-image" alt="facebook" src={ require('./facebook.png') }/></a>
            <div className="c-space"/>
            <a href="https://github.com/rolandc5"><img className="c-image" alt="github" src={ require('./github.jpg') } /></a>
            <div className="c-space"/>
            <a href="https://www.linkedin.com/in/roland-canuto-43437941/" ><img className="c-image" alt="linkedin" src={ require('./linkedin.png') } /></a>
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
              <Link to="/about" class="m-menuFont">about</Link>
              <div class="m-spaceRight"/>
              <Link to="/project" class="m-menuFont">projects</Link>
              <div class="m-spaceLeft"/>
              <Link to="/contact" class=" m-menuFont  menu-bBorder">contact</Link>
            </div>
          </div>
*/
