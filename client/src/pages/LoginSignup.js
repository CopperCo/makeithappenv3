import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
  // Button,
  // Form,
  // FormGroup,
  // Label,
  // Input
} from 'reactstrap';
import LogInSignUpForm from '../components/LoginSignUpComp/LogInSignUpForm';

class LoginSignup extends Component {
  render() {
    return (
      <Container className="loginSignUpPage">
        <Row>
          <Col md="12">
            <LogInSignUpForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginSignup;
