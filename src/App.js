import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import * as Pages from './Page';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={ Pages.Main }/>
        <Route path="/1/about" component={ Pages.About }/>
        <Route path="/1/project" component={ Pages.Projects }/>
        <Route path="/1/contact" component={ Pages.Contact }/>
      </div>
    );
  }
}

export default App;

//  //<Route exact path="/" component={ Pages.Loading }/>
