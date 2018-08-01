import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import * as Pages from './Page';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={ Pages.Main }/>
        <Route path="/about" component={ Pages.About }/>
        <Route path="/project" component={ Pages.Projects }/>
        <Route path="/contact" component={ Pages.Contact }/>
      </div>
    );
  }
}

export default App;
