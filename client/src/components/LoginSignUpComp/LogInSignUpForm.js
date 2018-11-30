import React, { Component } from 'react';

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class LogInSignUpForm extends Component {
  state = [
    {
      Name: '',
      Amount: '',
      Frequency: '',
      Date: ''
    }
  ];

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    this.setState({
      Name: this.name.value,
      Amount: this.amount.value,
      Frequency: this.frequency.value,
      Date: this.date.value
    });

    console.log(this.state);
  };

  render() {
    return (
      <Row>
        <Col md={6}>
          <Form className="signUpForm">
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Smith"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="johnsmith@example.ca"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="**********"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button>Sign in</Button>
          </Form>
        </Col>
        <Col md={6}>
          <Form className="loginForm">
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="youremail@email.ca"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Keep It Secret!"
              />
            </FormGroup>
            <Button>Log In</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default LogInSignUpForm;
