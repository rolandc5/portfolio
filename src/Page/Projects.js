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
      <div>
        <div className="p-container">
          <div className="p-wrapper">
            <div className="p-innerContainer">
              <div className="p-projectContainer">
                { file.map((value, i) => {
                    settings.autoplaySpeed = Math.random() * (8000 - 6000) + 6000;
                    return (
                      <div key={ i }>
                        <span className="p-titleFont"> { value.name } </span>
                        <div className="p-projectAlign">
                          <div className="p-leftB">
                            <Slider {...settings}>
                              { value.picture.map((picture, i) => {
                                  return (
                                    <div key= { i }>
                                      <img className="p-pImage" alt="this is supposed to be ... but can't be loaded" src={ picture }/>
                                    </div>
                                  )
                              }) }
                            </Slider>
                          </div>
                          <div className="p-spaceMiddle"/>
                          <div className="p-rightB">
                            <div className="p-infoFont">
                              <span>{ value.info }</span>
                              <br/>
                              <div className="spaceB"/>
                              <span className="p-infoBold"> Responsibilities: </span><span> Backend, Frontend </span>
                              <br/>
                              <span className="p-infoBold"> Languages: </span><span> JavaScript </span>
                              <br/>
                              <span className="p-infoBold">  Framework: </span><span> ReactJS, ExpressJS </span>
                            </div>
                            <div className="spaceB"/>
                            <div className="p-buttonPosition">
                              <a className="p-button p-buttonColorL" target="_blank" rel="noopener noreferrer" href={ value.site }><div> Link </div></a>
                              <div className="p-spaceMiddle"/>
                              <a className="p-button p-buttonColorC" target="_blank" rel="noopener noreferrer" href={ value.code }><div> Code </div></a>
                            </div>
                          </div>
                        </div>
                        <div className="spaceBottom"/>
                      </div>
                    )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
