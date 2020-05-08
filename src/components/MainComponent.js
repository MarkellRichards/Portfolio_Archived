import React, { Component } from 'react';
import Header from './HeaderComponent';
import Showcase from './ShowcaseComponent';
// import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Showcase />
      </div>
    );
  }
}

export default Main;
