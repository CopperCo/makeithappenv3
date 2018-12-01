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
import Hero from '../components/Hero/Hero';
import BudgetTable from '../components/Table/BudgetTable';
import FormComp from '../components/Form/Form';

import API from '../utils/API';

class BudgetSetup extends Component {
  state = {
    background:
      'url(https://res.cloudinary.com/mrs-k/image/upload/c_scale,e_blur:267,w_2027/v1543648864/budget.jpg) fixed',
    color: '#fff',
    budget: [
      {
        Name: '',
        Amount: '',
        Frequency: '',
        Date: ''
      }
    ]
  };

  componentDidMount() {
    this.loadBudget();
  }

  loadBudget = () => {
    API.getBudget()
      .then(res => {
        this.setState({
          name: res.data,
          amount: '',
          frequency: '',
          date: ''
        });
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  deleteIncome = id => {
    API.deleteIncome(id)
      .then(res => this.loadBudget())
      .catch(err => console.log(err));
  };

  deleteExpense = id => {
    API.deleteExpense(id)
      .then(res => this.loadBudget())
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
      this.state.budget.name &&
      this.state.budget.amount &&
      this.state.budget.frequency &&
      this.state.budget.date &&
      this.state.budget.category
    ) {
      API.saveBudget({
        Name: this.state.budget.name,
        Amount: this.state.budget.amount,
        Frequency: this.state.budget.frequency,
        Date: this.state.budget.date
      })
        .then(res => {
          this.loadBudget();
          console.log('data saved');
        })
        .catch(err => console.log(err));
    }
  };

  incomeData = [
    {
      id: 1,
      Name: 'Take Home Pay',
      Amount: '$5000',
      Frequency: 'monthly',
      Date: '10-31-18'
    },
    {
      id: 2,
      Name: 'Uber Pay',
      Amount: '150',
      Frequency: 'Wk',
      Date: '11-01-18'
    }
  ];
  expData = [
    {
      id: 1,
      Name: 'Bell Canda',
      Amount: '$250',
      Frequency: 'monthly',
      Date: '10-20-18'
    },
    {
      id: 2,
      Name: 'Rent',
      Amount: '1550',
      Frequency: 'Monthly',
      Date: '11-01-18'
    }
  ];

  render() {
    console.log(this.state.key);
    return (
      <div>
        <Hero
          title="It's Budgeting Time"
          background={this.state.background}
          color={this.state.color}
        />
        <Container>
          <Row>
            <Col xs="6">
              <FormComp />
            </Col>
            <Col xs="6">
              <BudgetTable title="Your Incomes" tableData={this.incomeData} />
              <BudgetTable title="Your Expenses" tableData={this.expData} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BudgetSetup;
