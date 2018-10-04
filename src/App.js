import React, { Component } from 'react';

import './App.css';

import * as Pages from './Page';

class App extends Component {
  render() {
    return (
      <div>
        { window.innerWidth > 600 ? <Pages.Nav/> : <Pages.NavM/> }
      </div>
    );
  }
}

export default App;

//  //<Route exact path="/" component={ Pages.Loading }/>
