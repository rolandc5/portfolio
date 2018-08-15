import React, { Component } from 'react';
import Slider from "react-slick";

export default class About extends Component {
  constructor() {
    super();
    this.state = {
      picture: [
        "https://twistedsifter.files.wordpress.com/2014/10/chin-fur-makes-cat-look-surprised-banye-china-5.jpg?w=800&h=533",
        "https://static.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg", "https://lh3.googleusercontent.com/OhIrlu99k2RbbZYFgz5BY_b27kTD4r-Dm1XslwGkhtq02vav7UlBZpaKhLGUuPD2I2Vu0cY9aWR4ILb3dt7bY5hPULiKs3tNZGSUCkkZCsuY8lyQ4b-j3IAgUhzdEoDsVWoUnwevEcRzFKoKuYRNtZS3WCJb21elIX0a5Kg7EgnQbmzS3CVPgNJAASKoFPqnDct5rSY2oPP6B2JkZSkbYzQjrccJXTuDvqv_vwkvq0MaO9v-cSv1H4j2fOq_FgIFN8Bk_U0Lr33RQ4LlzuC1d1FO5ehML2Dci_5r4Olw_BNdyYp-4P36FPeWItYPAMDnf0A9JzRwWav9fPxwIaw5_L_ExQg3qp81H-iVSUhM4XmHh91k2sBJmOFQSa8JQKRC-qBpu9CrYUxDNkvv5QSkFyG2lLqya9wmV1ktjqV4uOVnFGMtHQiYrf5mXkm9UjFHH1KZgzNra-OE88HrfxSZB0MLO4edCOMJgqc6jmwCFr2dFKL8dSBoHsLD8H6JwH17Y4aGLMy-d9lcyO_aoi-FB--2k_v5SaBnDihNWAm60t1n8RLxdbE_NubLkF-Xk1o2hTkxl631r5JAirlhc5bjhzlxqtaHeWV1ZFvG2g=w770-h472-no",
        "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/14908313_1327718957272275_9108900487504492690_n.jpg?_nc_cat=0&oh=c14fb5087a9eea5dfa0fc337897ca593&oe=5BFF54FB",
        "https://c1.staticflickr.com/1/134/317347044_67b177e6b7_z.jpg?zz=1",
        "http://cdn.idigitaltimes.com/sites/idigitaltimes.com/files/2017/01/13/splatoon-2-logo.jpg"
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
                          <img key={i} className="a-extrasP" alt="pictures here lol" src={ value }/>
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
            <div style={{ height: 100 }}/>
          </div>
        </div>
      </div>
    );
  }
}
