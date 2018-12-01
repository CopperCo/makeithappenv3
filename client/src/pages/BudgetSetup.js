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
import BudgetTable from '../components/Table/BudgetTable';
import FormComp from '../components/Form/Form';

import API from '../utils/API';

class BudgetSetup extends Component {
  state = [
    {
      Name: '',
      Amount: '',
      Frequency: '',
      Date: ''
    }
  ];

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
      this.state.name &&
      this.state.amount &&
      this.state.frequency &&
      this.state.date &&
      this.state.category
    ) {
      const inputDate = new Date(this.state.targetDate);
      const curDate = new Date();
      let months;
      months = (inputDate.getFullYear() - curDate.getFullYear()) * 12;
      months -= curDate.getMonth() + 1;
      months += inputDate.getMonth();
      months = months <= 0 ? 0 : months + 1;
      console.log(months);
      let monthlySaving = this.state.estimatedAmount / months;
      alert(monthlySaving);
      API.saveBudget({
        Name: this.state.name,
        Amount: this.state.amount,
        Frequency: this.state.frequency,
        Date: this.state.date
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
    );
  }
}

export default BudgetSetup;
