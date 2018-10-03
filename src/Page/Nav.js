import React, { Component } from 'react';
import './Global.css';

import * as Pages from '.';

export default class Nav extends Component {
    constructor (props) {
        super(props);
        this.state = {
            jumped: [0, 3, 6],
            page: 1,
            prevprevPage: 0,
        }
    }

    handleJump = (page) => {
    let jumped = 0;
    let prevPage = this.state.page;
    if (page === 1) {
        if (prevPage === 3 || (prevPage === 2 && this.state.prevprevPage === 3)) { 
        jumped = [1, 4, 6];
        }
        else {
        jumped = [1, 3, 6];
        }
    }

    if (page === 2) {
        if (prevPage === 3) {
        jumped = [2, 4, 6];
        }
        else {
        jumped = [2, 3, 6]
        }
    }

    if (page === 3) {
        jumped = [2, 5, 6];
    }
    //about = static 0, enter 1, leave 2
    //portfolio = static 3, enter 4, leave 5
    //contact = static 6, enter 7, leave 8
        this.setState({ page: page, jumped: jumped, prevprevPage: prevPage }, () => {
        });
    }
    render() {
        return (
            <div className='m-container'>
                <div className='n-container' >
                    <div className='n-wrapper'>
                        <div className='n-sideNav'>
                        </div>
                        <div className='n-topNav'>
                        <div className='g-f n-messageContainer'>Lets Talk</div>
                            <div className='g-f n-home'>
                                <div className='n-homeNav' style={{ marginLeft: '1em'}} onClick={ () => this.handleJump(1) }>About</div>
                                <div className='n-homeNav' style={{ marginLeft: '1em'}} onClick={ () => this.handleJump(2) }>Portfolio</div>
                                <div className='n-homeNav' style={{ marginLeft: '1em'}} onClick={ () => this.handleJump(3) }>Contact</div>
                            </div>
                        </div>
                        <div className='n-sideNav'>
                        <div className='n-barNav'>
                        </div>
                        </div>
                    </div>
                </div>
                <Pages.About position={ this.state.jumped }/>
                <Pages.Projects position={ this.state.jumped } file={ this.state.file }/>
                <Pages.Contact position={ this.state.jumped }/>
            </div>
        )
    }
}


/*
<div className='spacemiddle'><Link to='/portfolio' className={ `n-mProject ${this.state.jumped[1] ? 'n-barColor' : '' }` } onClick={ () => this.handleJump([false, true, false]) }></Link></div>
Figure out when pressed go back to top

on hover show the actual word
on press grow for the left

                    <div className='n-sideNav'>
                        <div className={ `n-bar ${ this.state.page === 1 ? 'n-barColor' : 'n-oldColor' }` } onClick={ () => this.handleJump(1) }></div>
                        <div className={ `n-bar ${ this.state.page === 2 ? 'n-barColor' : 'n-oldColor' }` } onClick={ () => this.handleJump(2) }></div>
                        <div className={ `n-bar ${ this.state.page === 3 ? 'n-barColor' : 'n-oldColor' }` } onClick={ () => this.handleJump(3) }></div>
                    </div>

                       <div className='n-messageContainer'>
                                <div onMouseOver={ () => this.handleSocial(true) } onMouseOut={ () => this.handleSocial(false) }>
                                <div className={`n-messageHover ${ this.state.sClick ? 'n-rotated' : 'n-unRotated' }`}>III</div>
                                <div className={`n-socialContainer ${ this.state.sClick ? 'n-socialDisplayed' : 'n-socialNotDisplayed'}`} >
                                    <ul>
                                        <li className='n-sList'><img className='n-contactImageSize' src={  require('./github.jpg') }/></li>
                                        <li className='n-sList'><img className='n-contactImageSize' src={  require('./github.jpg') }/></li>
                                        <li className='n-sList'><img className='n-contactImageSize' src={  require('./github.jpg') }/></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
*/




/*
  <div>
        <div className="m-container animated fadeIn faster">
          <div className="m-wrapper">
              <div style={{ height: 75 }}/>
              <div className="m-firstLine">
                <header className="g-f m-headerFont">Roland Canuto <br/> Full Stack Web Developer</header>
                <div style={{ height: 15 }}/>
              </div>
              <div>
                <div className="m-secondLine">
                <span>{ this.state.about === 0 ? <button className="g-f m-menuFont m-D" name="about" onClick={ this.handleAboutButton }>Stuff</button> : <button className="g-f m-menuFont m-A" name="about" onClick={ this.handleAboutButton }>Stuff</button> }</span>
                <span className="m-space"/>
                <span>{ this.state.blog  === 0 ? <button className="g-f m-menuFont m-D" name="blog" onClick={ this.handleBlogButton }>Blog</button> : <button className="g-f m-menuFont m-A" name="blog" onClick={ this.handleBlogButton }>Blog</button> }</span>
                </div>
              </div>
          </div>
          <div style={{ height: 50 }}/>
        </div>
        <div>
          { this.state.about === 1 ? <div className="animated fadeIn faster"><Pages.About/></div> : null }
          { this.state.projects === 1 ? <div className="animated fadeIn faster"><Pages.Projects/></div> : null }
          { this.state.blog === 1 ? <div className="animated fadeIn faster"><Pages.Contact/></div>  : null }
          { this.state.contact === 1 ? <div className="animated fadeIn faster"><Pages.Contact/></div> : null }
        </div>
        <div className="m-bottom">
          <div className="m-linkContainer">
            <div className="">

            </div>
            <div style={{ width: 50 }}/>
            
          <div style={{ height: 10 }}/>
          </div>
          <div style={{ height: 50 }}/>
        </div>
      </div>
*/

/*<span>{ this.state.projects ===  0 ? <button className="g-f m-menuFont m-D" name="projects" onClick={ this.handleProjectButton }>Work</button> : <button className="g-f m-menuFont m-A" name="projects" onClick={ this.handleProjectButton }>Work</button> }</span>
<span className="m-space"/>*/

/*<span><button className="m-menuFont" name="projects" onClick={ this.handleProjectButton }>work</button></span>
<span className="m-space"/>
<span><button className="m-menuFont" name="blog" onClick={ this.handleBlogButton }>blog</button></span>
<span className="m-space"/>

<div className="m-bottom">
<div style={{ height: 10 }}/>

  <div>
    <div className="m-linkContainer">
      <div className="">
        <a className="g-f m-linkFont" href="https://www.linkedin.com/in/roland-canuto-43437941/">linkedIn</a>
      </div>
      <div style={{ width: 50 }}/>
      <div className="t">
        <a className="g-f m-linkFont" href="https://github.com/rolandc5">github</a>
      </div>
    <div style={{ height: 10 }}/>
    </div>
    <div style={{ height: 50 }}/>
  </div>

</div>

<div>

</div>
*/
