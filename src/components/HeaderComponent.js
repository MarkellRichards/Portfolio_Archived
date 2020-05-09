import React, { Component } from 'react';
import {
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import { Link, animateScroll as scroll } from 'react-scroll';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Navbar dark sticky="top" expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto">
            <img
              src="/assets/images/logoOutline.svg"
              height="auto"
              width="60"
              alt="MR Logo"
              onClick={this.scrollToTop}
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse
            isOpen={this.state.isNavOpen}
            className="justify-content-end"
            navbar
          >
            <Nav navbar className="justify-content-end">
              <NavItem>
                <Link
                  activeClass="active"
                  to="story"
                  spy={true}
                  smooth={true}
                  offset={-85}
                  duration={300}
                  className="nav-link"
                >
                  My Story
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="nav-link"
                >
                  Services
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  activeClass="active"
                  to="Portfolio"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="nav-link"
                >
                  Portfolio
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="nav-link"
                >
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;
