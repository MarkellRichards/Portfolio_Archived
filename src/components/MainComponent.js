import React, { Component } from 'react';
import Header from './HeaderComponent';
import Showcase from './ShowcaseComponent';
import About from './AboutComponent';
import Experience from './ExperienceComponent';
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
        <About />
        <Experience />
      </div>
    );
  }
}

export default Main;
