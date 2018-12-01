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
        <Navbar color="#a79a8e" light expand="md">
          <Link to="/">
            <img src="/images/logo.png" alt="Make It Happen" />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto " navbar>
              <NavItem className="hvr-grow-rotate">
                <Link to="/budgetsetup">Budget</Link>
              </NavItem>
              {/* <NavItem className="hvr-grow-rotate">
                <Link to="/budget">Budget</Link>
              </NavItem> */}
              <NavItem className="hvr-grow-rotate">
                <Link to="/debt">Add Debt</Link>
              </NavItem>
              <NavItem className="hvr-grow-rotate">
                <Link to="/dreams">Add Dream</Link>
              </NavItem>
              <NavItem className="hvr-grow-rotate">
                <Link to="/loginsignup">Sign Up | Login </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
