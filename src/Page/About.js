import React, { Component } from 'react';
import { Projects } from './index.js';

const About = (props) => {
	return (
			<div className={`a-container ${ props.position[0] === 0 ? '' : props.position[0] === 1 ? 'a-animateEnter' : props.position[0] === 2 ? 'a-animateLeave':  null }`}>
				<div className="a-wrapper">
				<div className='wasd'>
					<div className='g-f a-aboutContainer'>
						<p className='a-about'>{"Hello, I'm Roland a Software Engineer living in Tracy, California the hottest/coldest place in the Central Valley. As a kid, I've always liked to take apart my toys to see how they work and sometimes successfully... putting them back together. Today, ever since the first output of 'Hello World', I've had a passion for programming. I love to create simple yet eye catching websites and reliable backend databases. "}</p>
					</div>
				</div>
				</div>
			</div>
  	)
}

export default About;

/*

export default class About extends Component {
    render() {
        return (
			<div className="a-container">
				<div className="a-wrapper">
					<div className='wasd'>
						<div className='g-f a-aboutContainer'>
							<p className='a-about'>{"Hello, I'm Roland a Software Engineer living in Tracy, California the hottest/coldest place in the Central Valley. As a kid, I've always liked to take apart my toys to see how they work and sometimes successfully... putting them back together. Today, ever since the first output of 'Hello World', I've had a passion for programming. I love to create simple yet eye catching websites and reliable backend databases. "}</p>
						</div>
					</div>
				</div>
			</div>
        );
    }
}



			<div className='a-direction'>
							<p className='g-f a-scroll'>Scroll</p>
						</div>
     <div className="a-innerContainer">
              <div className="a-infoContainer">
                <div style={{ height: 200 }}/>

                <div className="a-infoInnerContainer">
                  <div className="a-infoInnerWrapper">
                    <div className="a-infoBorder">
                      <div className="a-profileLeft">
                        <div style={{ height: 10 }}/>
                        <div className="a-profilePictureContainer">
                          <img className="a-profilePicture" src={ require('./picture.png')}/>
                        </div>
                        <div className="a-profilePictureSpace">
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
                      <div style={{ width: 20 }}/>
                      <div className="a-profileRight">
                        <div style={{ height: 10 }}/>
                        <div className="g-f a-profileHeader">
                          Something about me
                        </div>
                        <div style={{ height: 25 }}/>
                        <div className="g-f">
                         { "My name is Roland Canuto I was born in the Philippines, but soon moved here when I was 5 years old. I grew up in Tracy, California the hottest/coldest place in the Central Valley. Growing up I've always liked to take apart my things to see how they work and sometimes successfully putting them back together. From there, I knew I wanted to become an Engineer." }
                         <br/>
                         <div style={{ height: 10 }}/>
                         { "On the path of becoming a Software Engineer, I didn't see myself programming. Instead I saw Physics and Mathimatical equations. My first C++ class in college and couting (Hello world!) was the most life changing thing when I started out as a programmer." }
                         <br/>
                         <div style={{ height: 10 }}/>
                         { "As a Software Engineer today, I have earned a passion for coding. If I'm not at home coding, I enjoy hiking, camping, snowboarding, video games, traveling and music. Though once I'm away for a day not coding, I usually have this urge to write code, while constantly thinking of ways to improve my progamming abilities a way to surpass myself."}
                         <br/>
                         <div style={{ height: 10 }}/>
                         { "With the skills I learned to grasp, my future becomes clear. Dreams of yesterday became dreams of the past. New dreams now I can reach." }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ height: 400 }}/>
              </div>
            </div>

*/
