import React, { Component } from 'react';
import Slider from "react-slick";

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      picture: [
        "https://twistedsifter.files.wordpress.com/2014/10/chin-fur-makes-cat-look-surprised-banye-china-5.jpg?w=800&h=533",
        "https://static.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg",
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/14908313_1327718957272275_9108900487504492690_n.jpg?_nc_cat=0&oh=c14fb5087a9eea5dfa0fc337897ca593&oe=5BFF54FB",
      ]
    }
  }
  render() {
    var settings = {
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 6000,
    };
    return (
      <div className="a-container">
        <div className="a-wrapper">
          <div className="a-innerContainer">
            <div className="a-firstLine">
              <div className="a-summaryBox">
                <div>
                  <span className="a-titleFont">About me</span><div className="a-design"/>
                </div>
                <div className="a-summary">
                <div className="a-centeringS"/>
                <span>Hello. I am a programmer.</span>
                <br/>
                <span> I live in Tracy, a city in California.</span>
                <br/>
                <span> I am very passionate about learning new technologies.</span>
                </div>
              </div>
              <div className="a-middleSpace"/>
              <div className="a-somethingMe">
                <div>
                  <span className="a-titleFont">Things I like</span><div className="a-design"/>
                </div>
                <div style={{ height: 10}}/>
                <div className="a-myCarousel">
                  <Slider { ...settings }>
                    { this.state.picture.map((value, i) => {
                        return (
                          <div key={i}>
                            <img className="a-extrasP" alt="pictures here lol" src={ value }/>
                          </div>
                        )
                    })}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="a-spaceBottom"/>
            <div className="a-secondLine">
              <div className="a-skills">
                <div>
                  <span className="a-titleFont">Development Skills</span><div className="a-design"/>
                  <div style={{ height: 10}}/>
                </div>
                <div className="a-skillsCol">
                  <div className="a-Bar a-js">
                    JavaScript
                  </div>
                  <div style={{ height: 10}}/>
                  <div className="a-Bar a-Express">
                    ExpressJS
                  </div>
                  <div style={{ height: 10}}/>
                  <div className="a-Bar a-html">
                    HTML
                  </div>
                  <div style={{ height: 10}}/>
                  <div className="a-Bar a-css">
                    CSS
                  </div>
                  <div style={{ height: 10}}/>
                  <div className="a-Bar a-react">
                    ReactJS
                  </div>
                  <div style={{ height: 10}}/>
                  <div className="a-Bar a-reactN">
                    React Native
                  </div>
                  <div style={{ height: 10}}/>
                  <div className="a-Bar a-cpp">
                    C++
                  </div>
                  <div style={{ height: 10}}/>
                  <div className="a-Bar a-c">
                    C
                  </div>
                  <div style={{ height: 10}}/>
                  <div className="a-Bar a-Python">
                    Python
                  </div>
                </div>
              </div>
            </div>
            <div className=""/>
            <div className="a-thirdLine">

            </div>
            <div style={{ height: 100 }}/>
          </div>
        </div>
      </div>
    );
  }
}

/*
<div className="a-skillsJobs">
  <div>
    <span className="a-titleFont">Experience</span><div className="a-design"/>
    <div style={{ height: 10}}/>
  </div>
  <div>

  </div>
</div>
*/
