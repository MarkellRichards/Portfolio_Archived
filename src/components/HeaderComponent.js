import React, { Component } from 'react';
import {
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

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

  render() {
    return (
      <Navbar dark sticky="top" expand="md">
        <div className="container">
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="/assets/images/logoOutline.svg"
              height="auto"
              width="60"
              alt="MR Logo"
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
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/portfolio">
                  Portfolio
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;
