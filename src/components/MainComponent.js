import React, { Component } from 'react';
import { SERVICES } from '../shared/services';
import Header from './HeaderComponent';
import Showcase from './ShowcaseComponent';
import About from './AboutComponent';
import Experience from './ExperienceComponent';
import Services from './ServicesComponent';
// import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: SERVICES,
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Showcase />
        <About />
        <Experience />
        <Services services={this.state.services} />
      </div>
    );
  }
}

export default Main;
