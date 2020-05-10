import React, { Component } from 'react';
import { SERVICES } from '../shared/services';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Portfolio from './PortfolioComponent';
import Services from './ServicesComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Portfolio from './PortfolioComponent';

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
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route
            exact
            path="/services"
            render={() => <Services services={this.state.services} />}
          />
          <Route path="/portfolio" component={Portfolio} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
