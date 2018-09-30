import React, { Component } from 'react';

const Contact = (props) => {
    return (
      <div className={`c-container ${ props.position[3] === 6 ? '' : null }`}>
        <div className="c-wrapper">
          <div className="c-innerContainer">

            <div>
              <div style={{ height: 150 }}/>
              <div className="c-introOuterContainer">
                <div className="c-introContainer">
                  <div className="g-f c-headerFont">
                    Learn more in my blog!
                  </div>
                  <div style={{ height: 25 }}/>
                  <div className="g-f c-headerTFont">
                    { "Unfortunately this section is still under construction."}
                  </div>
                </div>
              </div>
              <div style={{ height: 150 }}/>
            </div>

          </div>
        </div>
      </div>
    )
}

export default Contact;