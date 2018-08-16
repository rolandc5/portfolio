import React, { Component } from 'react';

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      picture: [
        "https://static.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg",
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/14908313_1327718957272275_9108900487504492690_n.jpg?_nc_cat=0&oh=c14fb5087a9eea5dfa0fc337897ca593&oe=5BFF54FB",
      ]
    }
  }
  render() {
    return (
      <div className="a-container">
        <div className="a-wrapper">
          <div className="a-innerContainer">

            <div>
              <div style={{ height: 150 }}/>
              <div className="a-introOuterContainer">
                <div className="a-introContainer">
                  <div className="g-f a-headerFont">
                    Hi there!
                  </div>
                  <div style={{ height: 25 }}/>
                  <div className="g-f a-headerTFont">
                    { "I'm a full stack developer based in Tracy, Califonia. I have a passion for programming and learing new things about technology."}
                  </div>
                </div>
              </div>
              <div style={{ height: 150 }}/>
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
                        { "When I'm not doing any programming, I enjoy hiking, snowboard, camping, haning out with friends, video games, the guitar, fixing computers." }
                      </div>
                    </div>
                    <div style={{ height: 25 }}/>



                </div>
              </div>
              <div style={{ height: 150 }}/>
            </div>

              <div>
                <div className="a-introOuterContainer">
                  <div className="a-introContainer">
                    <div className="g-f a-headerFont">
                      Reach out to me!
                    </div>
                    <div style={{ height: 25 }}/>
                    <div className="g-f a-headerTFont">
                      { "rolandcanuto@outlook.com" }
                      <br/>
                      <div style={{ height: 10 }}/>
                      { "(510)331-7719" }
                    </div>
                  </div>
                </div>
                <div style={{ height: 100 }}/>
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
*/
