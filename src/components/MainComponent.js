import React, { Component } from 'react';
import { SERVICES } from '../shared/services';
import { PROJECTS } from '../shared/projects';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Portfolio from './PortfolioComponent';
import ProjectInfo from './ProjectInfoComponent';
import Services from './ServicesComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
// import Portfolio from './PortfolioComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: SERVICES,
      projects: PROJECTS,
    };
  }

  render() {
    const ProjectInfoPage = ({ match }) => {
      return (
        <ProjectInfo
          project={
            this.state.projects.filter(
              (project) => project.id === +match.params.projectID
            )[0]
          }
        />
      );
    };
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
          <Route
            exact
            path="/portfolio"
            render={() => <Portfolio projects={this.state.projects} />}
          />
          <Route path="/portfolio/:projectID" component={ProjectInfoPage} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
