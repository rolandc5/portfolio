import React, { Component } from 'react';

export default class Loading extends Component {
  componentDidMount() {
    window.location.href = 'http://localhost:3000/1/about';
  }

  render() {
    return (
      <div>
        <div>
          Loading
        </div>
      </div>
    )
  }
}
