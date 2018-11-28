import React, { Component } from 'react';
import API from '../utils/API';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  // FormGroup,
  // Label,
  Input
  // Jumbotron,
  // ListGroup,
  // ListGroupItem
} from 'reactstrap';
// import { Link } from 'react-router-dom';
import BudgetTable from '../compontents/Table/BudgetTable';

class Debts extends Component {
  state = {
    debts: [],
    currentDebt: {
      debtname: '',
      amount: 0,
      interestrate: 0,
      compounding: '',
      minimumpayment: 0,
      alternateamount: 0
    },
    monthsRemaining: 0,
    totalDebt: 0,
    totalMinPay: 0
  };

  constructor() {
    super();

    this.state = {
      strategy: '',
      debtStrategy: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      strategy: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  // componentDidMount() {
  //   this.loadDebts();
  // }

  // loadDebts = () => {
  //   API.getDebt()
  //     .then(res =>
  //       this.setState({
  //         debts: res.data,
  //         debtname: '',
  //         amount: '',
  //         interestrate: '',
  //         compounding: '',
  //         minimumpayment: '',
  //         alternateamount: ''
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      //modify according to object notation
      !this.state.currentDebt.debtname ||
      !this.state.currentDebt.amount ||
      !this.state.currentDebt.interestrate ||
      !this.state.currentDebt.compounding ||
      !this.state.currentDebt.minimumpayment ||
      !this.state.currentDebt.alternateamount
    ) {
      alert('Record the details of your debt here');
    } else {
      alert('Thank you');
    }

    API.saveDebt({
      debtname: this.state.debtname,
      amount: this.state.amount,
      interestrate: this.state.interestrate,
      compounding: this.state.compounding,
      minimumpayment: this.state.minimumpayment,
      alternateamount: this.state.alternateamount
    })
      .then(res => {
        this.loadDebts().then(() => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  };

  handleCalculations = () => {
    let totalMinPay = 0;
    let totalDebt = 0;

    let debtData = [
      {
        debtname: 'Car Loan',
        amount: 12000,
        interest: 7.0,
        frequency: 'monthly',
        mthlypay: 485.0,
        alternateamount: 200
      },
      {
        debtname: 'Mortgage',
        amount: 200000,
        interest: 5.0,
        frequency: 'monthly',
        mthlypay: 584.0
      },
      {
        debtname: 'Big screen TV',
        amount: 3000,
        interest: 21.99,
        frequency: 'monthly',
        mthlypay: 249.0
      },
      {
        debtname: 'Student Loan',
        amount: 22000,
        interest: 5.0,
        frequency: 'monthly',
        mthlypay: 315.0
      },
      {
        debtname: 'Snowmobile Loan',
        amount: 6000,
        interest: 8.0,
        frequency: 'monthly',
        mthlypay: 267.0
      }
    ];

    for (let i = 0; i < debtData.length; i++) {
      // get a total of all existing minimum monthly payments
      totalMinPay += debtData[i].mthlypay;
      console.log('totalmin' + totalMinPay);

      // get the current amount of all total debt owing
      totalDebt += debtData[i].amount;
      console.log('totalDebt' + totalDebt);
    }

    this.setState({
      totalDebt: totalDebt,
      totalMinPay: totalMinPay
      //monthsRemaining: monthsRemaining
    });

    let monthsRemaining =
      totalDebt / (totalMinPay + this.debtData[0].alternateamount);
  };

  debtData1 = [
    {
      debtname: 'Car Loan',
      amount: 12000,
      interest: 7.0,
      frequency: 'monthly',
      mthlypay: 485.0,
      alternateamount: 200
    },
    {
      debtname: 'Mortgage',
      amount: 200000,
      interest: 5.0,
      frequency: 'monthly',
      mthlypay: 584.0
    },
    {
      debtname: 'Big screen TV',
      amount: 3000,
      interest: 21.99,
      frequency: 'monthly',
      mthlypay: 249.0
    },
    {
      debtname: 'Student Loan',
      amount: 22000,
      interest: 5.0,
      frequency: 'monthly',
      mthlypay: 315.0
    },
    {
      debtname: 'Snowmobile Loan',
      amount: 6000,
      interest: 8.0,
      frequency: 'monthly',
      mthlypay: 267.0
    }
  ];

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6">
            <h1>Add new Debt</h1>
            <Form>
              <Input
                value={this.state.debtname}
                onChange={this.handleInputChange}
                name="debtname"
                placeholder="Name of Debt (required)"
              />
              <Input
                value={this.state.amount}
                onChange={this.handleInputChange}
                name="amount"
                placeholder="Original Amount Owing (required)"
              />
              <Input
                value={this.state.interestrate}
                onChange={this.handleInputChange}
                name="interestrate"
                placeholder="Interest Rate (required)"
              />
              <Input
                value={this.state.compounding}
                onChange={this.handleInputChange}
                name="compounding"
                placeholder="Frequency Interest Compounds (required)"
              />
              <Input
                value={this.state.minimumpayment}
                onChange={this.handleInputChange}
                name="minimumpayment"
                placeholder="Minimum Payment Amount (required)"
              />
              <Input
                value={this.state.alternateamount}
                onChange={this.handleInputChange}
                name="alternateamount"
                placeholder="alternateamount"
              />
              <Button
                disabled={
                  !(
                    this.state.debtname &&
                    this.state.amount &&
                    this.state.interestrate &&
                    this.state.compounding &&
                    this.state.minimumpayment &&
                    this.state.alternateamount
                  )
                }
                onClick={this.handleFormSubmit}
              >
                Submit New Debt
              </Button>
            </Form>
          </Col>
          <Col size="md-6 sm-12">
            <h1>Current Debts on record</h1>
            {/* {this.state.debts.length ? (
              <ListGroup>
                {this.state.debts.map(debt => (
                  <ListGroupItem key={debt._id}>
                    <Link to={'/debts/' + debt._id}>
                      <strong>
                        {debt.debtname} with original amount of {debt.amount} at{' '}
                        {debt.interestrate} % interest, compounding{' '}
                        {debt.compounding} with minimum payment of{' '}
                        {debt.minimumpayment} with a current balance remaining
                        of {debt.alternateamount}
                      </strong>
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
            <BudgetTable title="Your Debts" tableData={this.debtData1} />
            {console.log('this is debtData: ' + this.debtData1)}
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <h1>How much longer will I be in debt?</h1>
            <Button onClick={this.handleCalculations}>
              Get my debt report
            </Button>
            <h3>
              {' '}
              You will be in debt for {this.state.monthsRemaining} months.
            </h3>
            {console.log('MR = ' + this.state.monthsRemaining)}
          </Col>
        </Row>
        <Col>
          <form onSubmit={this.handleSubmit}>
            <p className="title">HOW DO YOU WANT TO PAY DOWN YOUR DEBT?</p>

            <h3>
              Method # 1 - Snowball method - start with paying off the smallest
              debt, and once that debt is paid off, add your minimum payment to
              pay off the next smallest debt.
            </h3>
            <h3>
              Method # 2 - Avalanche method - start with paying off the largest
              debt, and once that debt is paid off, add your minimum payment to
              pay off the next largest debt.
            </h3>
            <h3>
              Method # 3 - Highest Interest method - start with paying off the
              debt with the highest interest rate, which saves you long term on
              interest costs. Once that debt is paid off, apply that minimum
              payment to help pay off the debt with the next highest interest
              rate.
            </h3>
            <br />
            <h2>Which method do you want to use to pay off debt?</h2>
            <ul>
              <li>
                <label>
                  <input
                    type="radio"
                    value="Snowball"
                    checked={this.state.strategy === 'Snowball'}
                    onChange={this.handleChange}
                  />
                  Snowball
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    value="Avalanche"
                    checked={this.state.strategy === 'Avalanche'}
                    onChange={this.handleChange}
                  />
                  Avalanche
                </label>
              </li>

              <li>
                <label>
                  <input
                    type="radio"
                    value="Highest Interest"
                    checked={this.state.strategy === 'Highest_Interest'}
                    onChange={this.handleChange}
                  />
                  Highest Interest
                </label>
              </li>
            </ul>
            <button type="submit" className="submit-button">
              Make your choice
            </button>
          </form>
        </Col>
      </Container>
    );
  }
}
export default Debts;
