import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="p-container">
        <div className="c-wrapper">
          <div className="c-innerContainer">
            <div className="c-socialContainer">
              <div className="c-questionsBorder">
                <div>
                  <span className="c-titleFont">Questions?</span><div className="c-designLine"/>
                  <div style={{ height: 10 }}/>
                </div>
                <div className="c-inputForm">
                  <div className="c-topForm">
                    <div className="c-inputName"> Name </div>
                    <div style={{ width: 50 }}/>
                    <div className="c-inputName"> Email </div>
                  </div>
                  <div style={{ height: 10 }}/>
                  <div className="c-bottomForm">
                    <div className="c-inputQuestion"> Question</div>
                  </div>
                </div>
              </div>
              <div className="c-spaceMiddle"/>
              <div className="c-socialBorder">
                <div>
                  <span className="c-titleFont">Lets Connect!</span><div className="c-designLine"/>
                  <div style={{ height: 10 }}/>
                </div>
                <div className="c-linkCol">
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/roland.canuto"><img className="c-image" alt="facebook" src={ require('./facebook.png') }/></a>
                  <div className="c-space"/>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/rolandc5"><img className="c-image" alt="github" src={ require('./github.jpg') } /></a>
                  <div className="c-space"/>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/roland-canuto-43437941/" ><img className="c-image" alt="linkedin" src={ require('./linkedin.png') } /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

/*
<div>
  <div className="c-socialFont">
    Lets Connect!
  </div>
  <div className="c-linkCol">
    <a href="https://www.facebook.com/roland.canuto"><img className="c-image" alt="facebook" src={ require('./facebook.png') }/></a>
    <div className="c-space"/>
    <a href="https://github.com/rolandc5"><img className="c-image" alt="github" src={ require('./github.jpg') } /></a>
    <div className="c-space"/>
    <a href="https://www.linkedin.com/in/roland-canuto-43437941/" ><img className="c-image" alt="linkedin" src={ require('./linkedin.png') } /></a>
  </div>
</div>*
*/
