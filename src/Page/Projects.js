import React, { Component } from 'react';
import Slider from "react-slick";
import './Global.css';
import './Mobile.css';


export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      file: [
        //{name: '', site: '', code: '', picture: '', info: ''},
        {name: 'Password', site: 'https://pass-client.herokuapp.com/', code: 'https://github.com/rolandc5/password-client/tree/modalBranch', picture: ["https://twistedsifter.files.wordpress.com/2014/10/chin-fur-makes-cat-look-surprised-banye-china-5.jpg?w=800&h=533", "https://static.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg"], info: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'},
        {name: 'Show Case', site: 'https://pass-client.herokuapp.com/', code: 'https://github.com/LSPortfolio', picture: ["https://twistedsifter.files.wordpress.com/2014/10/chin-fur-makes-cat-look-surprised-banye-china-5.jpg?w=800&h=533", "https://static.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg"], info: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'},
      ]
    }
  }
  render() {
    const file = this.state.file;
    var settings = {
      dots: true,
      swipeToSlide: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: Math.random() * (8000 - 6000) + 6000,
    };
    return (
      <div className="p-container">
        <div className="p-wrapper">
          <div className="p-innerContainer">
              { file.map((value, i) => {
                return (
                  <div key={ i }>
                    <div className="p-row">
                      <div>
                        <div className="p-nameFont">{ value.name }</div>
                        <div className="p-byFont"> By Roland Canuto </div>
                        <div className="p-carouselC">
                          <Slider className="p-carousel" {...settings}>
                            { value.picture.map((picture, i) => {
                              settings.autoplaySpeed = Math.random() * (8000 - 6000) + 6000;
                                return (
                                  <div key={i}>
                                    <img className="p-image" alt="pictures not here" src={ picture }/>
                                  </div>
                                )
                            })}
                          </Slider>
                        </div>
                      </div>
                      <div className="p-spaceMiddle"/>
                      <div class="p-infoBorder">
                        <div className="p-spaceTop"/>
                        <div className="p-infoLine">{ value.info }</div>
                        <div className="p-spaceLine"/>
                        <div className="p-infoLine "><span style={{ fontWeight: "bold"}}>Role:</span> Front-end, Back-end developer </div>
                        <div className="p-infoLine "><span style={{ fontWeight: "bold"}}>Languages:</span> Javascript </div>
                        <div className="p-infoLine "><span style={{ fontWeight: "bold"}}>Frameworks/Libs:</span> React, NodeJS, MongoDB, </div>
                        <div className="p-infoLinks">
                          <a target="_blank" rel="noopener noreferrer" href={ value.site }> <img className="p-links" alt="link" src={require("./link.png")}/> </a>
                          <div className="p-divideIcons"/>
                          <a target="_blank" rel="noopener noreferrer" href={ value.code }> <img className="p-links" alt="link" src={require("./code.png")}/> </a>
                        </div>
                      </div>
                    </div>
                  <div className="p-bottomSpace"/>
                  </div>
                )
              })}
            <div style={{ paddingBottom: "30px"}}/>
          </div>
        </div>
      </div>
    )
  }
}
