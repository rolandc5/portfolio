import React, { Component } from 'react';

import './App.css';

import * as Pages from './Page';

class App extends Component {
  render() {
    return (
      <div>
        <Pages.Nav/>
      </div>
    );
  }
}

export default App;

//  //<Route exact path="/" component={ Pages.Loading }/>
