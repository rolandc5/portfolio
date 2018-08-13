import React, { Component } from 'react';

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      file: [
        //{name: '', site: '', code: '', picture: '', info: ''},
        {name: 'Remember Me Not', site: 'https://pass-client.herokuapp.com/', code: 'https://github.com/rolandc5/password-client/tree/modalBranch', picture: "https://twistedsifter.files.wordpress.com/2014/10/chin-fur-makes-cat-look-surprised-banye-china-5.jpg?w=800&h=533", info: 'This project was created for the convience of users that don\'t remember their passwords'},
          {name: 'Remember Me Not', site: 'https://pass-client.herokuapp.com/', code: 'https://github.com/rolandc5/password-client/tree/modalBranch', picture: "https://twistedsifter.files.wordpress.com/2014/10/chin-fur-makes-cat-look-surprised-banye-china-5.jpg?w=800&h=533", info: 'This project was created for the convience of users that don\'t remember their passwords'},
      ]
    }
  }
  render() {
    const file = this.state.file;
    return (
      <div className="p-container">
        <div className="p-wrapper">
          <div className="p-innerContainer">
              { file.map((value, i) => {
                return (
                  <div key={ i }>
                    <div className="p-column">
                      <div className="p-nameFont">{ value.name }</div>
                      <div><img className="p-image" alt="this is the project" src={ value.picture }/></div>
                      <div class="p-infoBorder">
                        <div className="p-infoLinks">
                          <a href={ value.site }> <img className="p-links" alt="link" src={require("./link.png")}/> </a>
                          <div className="p-divideIcons"/>
                          <a href={ value.code }> <img className="p-links" alt="link" src={require("./code.png")}/> </a>
                        </div>
                        <div className="p-infoLine">{ value.info }</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            <div style={{ paddingBottom: "40px"}}/>
          </div>
        </div>
      </div>
    )
  }
}
/*
<div key={i}>
  <div className="p-column">
    <div className="p-nameFont">{ value.name }</div>
    <img className="p-image" src={ value.picture }/>
    <div class="p-infoBorder">
      <div class="p-infoLinks">
        <a href={ value.site }> <img class="p-links" alt="link" src={require("./link.png")}/> </a>
        <div class="p-divideIcons"/>
        <a href={ value.code }> <img class="p-links" alt="link" src={require("./code.png")}/> </a>
      </div>
      <div class="p-infoLine">{ value.info }</div>
    </div>
  </div>
*/

/*
            <div class="menu-container">
              <div class="m-secondLine">
                <Link to="/about" class="m-menuFont">about</Link>
                <div class="m-spaceRight"/>
                <Link to="/project" class="m-menuFont menu-bBorder">projects</Link>
                <div class="m-spaceLeft"/>
                <Link to="/contact" class=" m-menuFont">contact</Link>
              </div>
            </div>
                    <div class="p-projectContainer">
                      <div class="p-nameFont">Remember Me Not</div>
                      <div><img class="p-image" alt="Could not load" src="https://twistedsifter.files.wordpress.com/2014/10/chin-fur-makes-cat-look-surprised-banye-china-5.jpg?w=800&h=533"/></div>
                      <div class="p-infoBorder">
                        <div class="p-infoLinks">
                          <a href="https://www.google.com"> <img class="p-links" alt="link" src={require("./link.png")}/> </a>
                          <div class="p-divideIcons"/>
                          <a href="https://www.google.com"> <img class="p-links" alt="link" src={require("./code.png")}/> </a>
                        </div>
                        <div class="p-infoLine">
                          This project was created for the convience of users that don't remember their passwords
                        </div>
                      </div>
                    </div>
                    <div class="p-projectContainer">
                      <div class="p-nameFont">Remember Me Not</div>
                      <div><img class="p-image" alt="Could not load" src="https://twistedsifter.files.wordpress.com/2014/10/chin-fur-makes-cat-look-surprised-banye-china-5.jpg?w=800&h=533"/></div>

                    </div>


                    backup

                    <div class="">
                      <div class="">
                        <div>
                          <div>
                            <div class="p-container">
                              <div class="p-wrapper">
                                <div class="p-innerContainer">
                                  <div>
                                    { this.state.file.map((value, index) => {
                                        return (
                                          <div key={ index }>
                                            <div cslass="p-projectContainer">
                                              <div class="p-nameFont">{ value.name }</div>
                                              <div><img class="p-image" alt="Could not load" src={value.picture}/></div>
                                              <div class="p-infoBorder">
                                                <div class="p-infoLinks">
                                                  <a href={ value.site }> <img class="p-links" alt="link" src={require("./link.png")}/> </a>
                                                  <div class="p-divideIcons"/>
                                                  <a href={ value.code }> <img class="p-links" alt="link" src={require("./code.png")}/> </a>
                                                </div>
                                                <div class="p-infoLine">
                                                  { value.info }
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ margin: "50px"}}/>
                          </div>
                        </div>
                      </div>
                    </div>

*/
