import React, { Component } from 'react';

export default class About extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div className="a-container">
        <div className="a-wrapper">
          <div className="a-innerContainer">
            <div className="a-infoContainer">
              <div style={{ height: 150 }}/>

              <div className="a-headerContainer">
                <div className="a-headerWrapper">
                  <div className="g-f a-headerFont">
                    <span> Hi There! </span>
                  </div>
                  <div style={{ height: 25 }}/>
                  <div className="g-f a-headerTFont">
                    { "I'\m a full stack developer based in Tracy, Califonia. I have a passion for programming and learing new things about technology."}
                  </div>
                </div>
              </div>

              <div style={{ height: 150 }}/>

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
                     { "My name is Roland Canuto and I am a full stack developer living in the Bay Area. While I don't have a degree in Software Engineering. I have learned what it takes to become one at Lambda School, where I completed a 6 month course to teach me what it takes to be Software Engineer." }
                     <br/>
                     <div style={{ height: 10 }}/>
                     { "This website is to showcase my work that I have produced throughout the course of my studies and work to promote myself for future employers. I have always enjoyed being a techi. At a very young age, I loved nothing more than taking apart my toys and learning about how they worked. My passion for technology has thrived as I have grown."}
                     <br/>
                     <div style={{ height: 10 }}/>
                     { "When I am not coding, I enjoy hiking, camping, snowboarding, video games, traveling and music." }
                    </div>
                  </div>
                </div>
              </div>


                <div style={{ height: 100 }}/>
                <div className="a-linkContainer">
                <div className="a-emailContainer">
                  <div className="g-f a-emailHeader">
                    Hire Me!
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

              <div style={{ height: 150 }}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
<div>
  <div className="g-f a-headerFont">
    Hi there!
  </div>
  <div className="g-f a-headerTFont">
    { "I'\m a full stack developer based in Tracy, Califonia. I have a passion for programming and learing new things about technology."}
  </div>
</div>


            <div>
              <div className="a-introOuterContainer">
                <div className="a-introSContainer">

                <div style={{ height: 25 }}/>
                  <div className="g-f a-bodyFont">
                    A bit about me
                  </div>

                  <div style={{ height: 50 }}/>
                  <div className="a-row">
                    <div className="g-f a-bodyTFont">
                      { "Before taking on the task as a Software Developer. I went to school for Computer Engineering, while also doing my Freelance work in Computer Repair." }
                    </div>
                    <div style={{ width: 5 }}/>
                    <div className="a-something">
                      <div className="a-oProcessor">
                        <div className="g-f a-iProcessor">
                          CPU
                        </div>
                      </div>
                    </div>
                  </div>


                    <div style={{ height: 50 }}/>
                    <div className="a-row">
                    <div className="a-something">
                      <div className="a-oHobby">
                        <div className="a-iHobby">
                            Hobbies
                        </div>
                      </div>
                      </div>
                      <div style={{ width: 5 }}/>
                      <div className="g-f a-bodyTFont">
                        { "When I'm not doing any programming, I enjoy hiking, snowboard, camping, video games, the guitar, fixing computers." }
                      </div>
                    </div>
                    <div style={{ height: 25 }}/>



                </div>
              </div>
              <div style={{ height: 125 }}/>
            </div>

*/
