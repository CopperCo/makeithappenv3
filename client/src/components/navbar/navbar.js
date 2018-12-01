import React from 'react';
import './navbar.css';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';

import { Link } from 'react-router-dom';

export default class Makeithappennav extends React.Component {
  state = {};

  componentDidMount = () => {
    this.setState = {
      isOpen: false
    };
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/">
            <img src="/images/logo.png" alt="Make It Happen" />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/budgetsetup">Setup</Link>
              </NavItem>
              <NavItem>
                <Link to="/budget">Budget</Link>
              </NavItem>
              <NavItem>
                <Link to="/debt">Add Debt</Link>
              </NavItem>
              <NavItem>
                <Link to="/dreams">Add Dream</Link>
              </NavItem>
              <NavItem>
                <Link to="/loginsignup">Sign Up | Login </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
