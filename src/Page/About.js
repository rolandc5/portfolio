import React, { Component } from 'react';
import { Projects } from './index.js';

export default class About extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div>
        <div className="a-container">
          <div className="a-wrapper">
            <div className="a-innerContainer">
              <div className="a-infoContainer">
                <div style={{ height: 200 }}/>

                <div className="a-infoInnerContainer">
                  <div className="a-infoInnerWrapper">
                    <div className="a-profileLeft">
                      <div className="a-profilePictureContainer">
                        <img className="a-profilePicture" src={ require('./picture.png')}/>
                      </div>
                      <div className="a-profilePictureSpace">
                      </div>
                    </div>
                    <div style={{ width: 20 }}/>
                    <div className="a-profileRight">
                      <div style={{ height: 25 }}/>
                      <div className="g-f a-profileHeader">
                        Something about me
                      </div>
                      <div style={{ height: 25 }}/>
                      <div className="g-f">
                       { "My name is Roland Canuto I was born in the Philippines, but soon moved here when I was 5 years old. I grew up in the Tracy, California a hottest/coldest place in the Central Valley. Growing up I've always liked to take apart my things to see how they work and sometimes successfully putting them back together. From there, I knew I wanted to become an Engineer." }
                       <br/>
                       <div style={{ height: 10 }}/>
                       { "In the past I have always envisioned myself as becoming a Computer Engineer or an Electrical Engineer. While not everything comes to plan, becoming a Software Engineer brings me one step closer to that path." }
                       <br/>
                       <div style={{ height: 10 }}/>
                       { "As a Software Engineer today, I have earned a passion for coding. If I'm not at home coding, I enjoy hiking, camping, snowboarding, video games, traveling and music. Though once I'm away for a day not coding, I usually have this urge to write code, while constantly thinking of ways to improve my progamming abilities a way to surpass myself."}
                       <br/>
                       <div style={{ height: 10 }}/>
                       { "With the skills I learned to grasp, my future becomes a blur. Dreams of yesterday became dreams of the past. Not knowing what the future holds for me, heres hoping that it's something bright." }
                       <br/>
                       <div style={{ height: 10 }}/>
                       { "." }
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ height: 200 }}/>
              </div>
            </div>
          </div>
        </div>

        <Projects/>

      </div>
    );
  }
}

/*
<div style={{ height: 100 }}/>
<div className="a-linkContainer">
<div className="a-emailContainer">
  <div className="g-f a-emailHeader">
    Lets Connect!
  </div>
  <div style={{ height: 10 }}/>


  <div className="a-socialRow">
    <div>
      <a className="g-f a-linkFont" href="https://www.linkedin.com/in/roland-canuto-43437941/">linkedIn</a>
    </div>
    <div style={{ width: 10 }}/>
    <div className="">
      <a className="g-f a-linkFont" href="mailto:rolandcanuto@outlook.com"> eMail </a>
    </div>
    <div style={{ width: 10 }}/>
    <div className="t">
      <a className="g-f a-linkFont" href="https://github.com/rolandc5">github</a>
    </div>
  </div>
</div>
</div>

*/
