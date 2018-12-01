import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Hero from '../components/Hero/Hero';
import ytVideo from '../components/Videos/Videos';



class Main extends Component {
  state = {
    background: "url(https://res.cloudinary.com/mrs-k/image/upload/c_scale,w_2021/v1543539825/coins.jpg) fixed"
  }
  

  render() {
    return <Hero title="Goodbye Debt, Hello Fun" para="We all want to live for more than just paying bills and dying." background={this.state.background} size={this.state.backgroundSize}/>;
    <Container>
      <Row> 
        <Col> 
          <ytVideo />
        </Col>
      </Row>
    </Container>
  }
}

export default Main;
