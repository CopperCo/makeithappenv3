import React, { Component } from 'react';
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from 'reactstrap';
import Hero from '../components/Hero/Hero';
import BudgetTable from '../components/Table/BudgetTable';
// import { List, ListItem } from "../components/List";
// import { Link } from "react-router-dom";

import API from '../utils/API';

class Dreams extends Component {
  state = {
    dreams: [],
    name: '',
    targetDate: '',
    estimatedAmount: '',
    background:
      'url(https://res.cloudinary.com/mrs-k/image/upload/c_scale,e_blur:174,w_2147/v1543647914/beach.jpg) fixed'
  };

  componentDidMount() {
    this.loadDreams();
  }

  loadDreams = () => {
    API.getDreams()
      .then(res => {
        this.setState({
          dreams: res.data,
          name: '',
          targetDate: '',
          estimatedAmount: ''
        });
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  deleteDream = id => {
    API.deleteDream(id)
      .then(res => this.loadDreams())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.name &&
      this.state.targetDate &&
      this.state.estimatedAmount
    ) {
      const inputDate = new Date(this.state.targetDate);
      const curDate = new Date();
      let months;
      months = (inputDate.getFullYear() - curDate.getFullYear()) * 12;
      months -= curDate.getMonth() + 1;
      months += inputDate.getMonth();
      months = months <= 0 ? 0 : months + 1;
      console.log(months);
      var monthlySaving = this.state.estimatedAmount / months;
      alert(monthlySaving);
      API.saveDream({
        name: this.state.name,
        targetDate: this.state.targetDate,
        estimatedAmount: this.state.estimatedAmount,
        minMonthlySaving: monthlySaving
      })
        .then(res => {
          this.loadDreams();
          console.log('data saved');
        })
        .catch(err => console.log(err));
    }
  };

  dreamData = [
    {
      id: '1',
      dreamName: 'Dream1',
      estimatedAmont: '2000',
      targetDate: '2019-02-02',
      priority: 'High'
    },
    {
      id: '2',
      dreamName: 'Dream2',
      estimatedAmont: '4000',
      targetDate: '2019-02-02',
      priority: 'High'
    }
  ];

  render() {
    return (
      <div>
        <Hero
          title="Lets Manage Your Dreams"
          background={this.state.background}
        />
        <Container>
          <Row>
            <Col sm="6">
              <Card>
                <CardBody>
                  <CardTitle>Input New Dream</CardTitle>
                  <Form>
                    <FormGroup>
                      <Label for="dreamName">Name</Label>
                      <Input
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        name="name"
                        placeholder="Name (required)"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="estimatedAmont">Estimated Amount</Label>
                      <Input
                        value={this.state.estimatedAmount}
                        onChange={this.handleInputChange}
                        name="estimatedAmount"
                        placeholder="Estimated Amount (Required)"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="targetDate">Target Date</Label>
                      <Input
                        value={this.state.targetDate}
                        type="date"
                        name="targetDate"
                        id="targetDate"
                        placeholder="DD/MM/YYYY"
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>

                    <button
                      disabled={
                        !(
                          this.state.name &&
                          this.state.targetDate &&
                          this.state.estimatedAmount
                        )
                      }
                      onClick={this.handleFormSubmit}
                    >
                      Submit
                    </button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6">
              <Card>
                <CardBody>
                  {/* <BudgetTable
                  title="Your Dreams"
                  // tableData={this.state.dreams}
                  tableData={this.state}
                /> */}
                  {this.state.dreams.length ? (
                    <BudgetTable
                      title="Your Dreams"
                      // tableData={this.state.dreams}
                      tableData={this.state.dreams}
                    />
                  ) : (
                    <h3>No Results to Display</h3>
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dreams;
