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
import ServiceInfo from './ServiceInfoComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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

    const ServiceInfoPage = ({ match }) => {
      return (
        <ServiceInfo
          services={this.state.services}
          service={
            this.state.services.filter(
              (service) => service.id === +match.params.serviceID
            )[0]
          }
        />
      );
    };
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={500}
          >
            <Switch>
              <Route
                exact
                path="/home"
                render={() => <Home services={this.state.services} />}
              />
              <Route path="/about" component={About} />
              <Route
                exact
                path="/services"
                render={() => <Services services={this.state.services} />}
              />
              <Route path="/services/:serviceID" component={ServiceInfoPage} />
              <Route
                exact
                path="/portfolio"
                render={() => <Portfolio projects={this.state.projects} />}
              />
              <Route path="/portfolio/:projectID" component={ProjectInfoPage} />
              <Route path="/contact" component={Contact} />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
