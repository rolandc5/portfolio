import React, { Component } from 'react';
import './Global.css';

import * as Pages from './index.js';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      about: 0,
      projects: 0,
      blog: 0,
      contact: 0
    }
    this.handleAboutButton = this.handleAboutButton.bind(this);
    this.handleProjectButton = this.handleProjectButton.bind(this);
    this.handleBlogButton = this.handleBlogButton.bind(this);
    this.handleContactButton = this.handleContactButton.bind(this);
    }

  componentDidMount() {
    this.setState({ about: 1, projects: 0, blog: 0, contact: 0 },  () => {
      console.log(this.state.about);
      return;
    });
  }

  handleAboutButton() {
    this.setState({ about: 1, projects: 0, blog: 0, contact: 0 },  () => {
      console.log(this.state.about);
      return;
    });
  }

  handleProjectButton() {
    this.setState({ about: 0, projects: 1, blog: 0, contact: 0 },  () => {
      console.log(this.state.projects);
      return;
    });
  }

  handleBlogButton() {
    this.setState({ about: 0, projects: 0, blog: 1, contact: 0 },  () => {
      console.log(this.state.blog);
      return;
    });
  }

  handleContactButton() {
    this.setState({ about: 0, projects: 0, blog: 0, contact: 1 },  () => {
      console.log(this.state.contact);
      return;
    });
  }

  render() {
    return (
      <div>
        <div className="m-container animated fadeIn faster">
          <div className="m-wrapper">
            <div className="m-innerContainer">
              <div style={{ height: 75 }}/>
              <div className="m-firstLine">
                <div><header className="g-f m-headerFont">Roland Canuto / Full Stack Developer</header></div>
                <div style={{ height: 15 }}/>
              </div>
              <div>
                <div className="m-secondLine">
                <span>{ this.state.projects ===  0 ? <button className="g-f m-menuFont m-D" name="projects" onClick={ this.handleProjectButton }>Work</button> : <button className="g-f m-menuFont m-A" name="projects" onClick={ this.handleProjectButton }>Work</button> }</span>
                <span className="m-space"/>
                <span>{ this.state.about === 0 ? <button className="g-f m-menuFont m-D" name="about" onClick={ this.handleAboutButton }>About</button> : <button className="g-f m-menuFont m-A" name="about" onClick={ this.handleAboutButton }>About</button> }</span>
                <span className="m-space"/>
                <span>{ this.state.blog  === 0 ? <button className="g-f m-menuFont m-D" name="blog" onClick={ this.handleBlogButton }>Blog</button> : <button className="g-f m-menuFont m-A" name="blog" onClick={ this.handleBlogButton }>Blog</button> }</span>
                </div>
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
        <div>
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
              <div style={{ height: 10 }}/>
            </div>

          </div>
        </div>
      </div>
    )
 }
}


/*<span><button className="m-menuFont" name="projects" onClick={ this.handleProjectButton }>work</button></span>
<span className="m-space"/>
<span><button className="m-menuFont" name="blog" onClick={ this.handleBlogButton }>blog</button></span>
<span className="m-space"/>
*/
