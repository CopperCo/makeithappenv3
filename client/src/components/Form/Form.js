import React, { Component } from 'react';
import {
  // Container,
  // Row,
  // Col,
  // Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

// import Jumbotron from '../../components/Jumbotron';
class FormComp extends Component {
  state = [
    {
      Name: '',
      Amount: '',
      Frequency: '',
      Date: ''
    }
  ];

  static defaultProps = {
    frequencyOptions: ['Variable', 'Daily', 'Weekly', 'Bi-Weekly', 'Monthly'],
    catagoryOfSource: ['Income', 'Expense']
  };

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
    let frequencyOptions = this.props.frequencyOptions.map(freq => {
      return (
        <option key={freq} value="frequency">
          {freq}
        </option>
      );
    });
    let catagoryOfSource = this.props.catagoryOfSource.map(catagory => {
      return (
        <option key={catagory} value="frequency">
          {catagory}
        </option>
      );
    });
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <FormGroup>
          <Label for="text">Name of Income Or Expense:</Label>
          <Input
            value={this.state.nameIncExp}
            type="text "
            name="nameIncExp"
            ref={this.name}
            onChange={this.handleInputChange}
            id="nameIncExp"
            placeholder="Gas Bill"
          />
        </FormGroup>
        <FormGroup>
          <Label for="text">Amount:</Label>
          <Input
            value={this.state.amount}
            type="text "
            name="amount"
            ref={this.amount}
            onChange={this.handleInputChange}
            id="amount"
            placeholder="250.00"
          />
        </FormGroup>
        <FormGroup>
          <Label for="frequency">Frequency</Label>
          <Input
            value={this.state.frequency}
            type="select"
            name="frequency"
            ref={this.frequency}
            id="frequency"
            onChange={this.handleInputChange}
          >
            {frequencyOptions}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="category">Category</Label>
          <Input
            value={this.state.category}
            type="select"
            name="category"
            ref={this.category}
            id="category"
            onChange={this.handleInputChange}
          >
            {catagoryOfSource}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleDate">Date</Label>
          <Input
            value={this.state.date}
            type="date"
            name="date"
            ref={this.date}
            id="exampleDate"
            placeholder="date placeholder"
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <input type="submit" />
        {/* <Button onClick={this.handleFormSubmit}>Add Item</Button> */}
      </Form>
    );
  }
}

export default FormComp;
