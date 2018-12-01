import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Hero from '../components/Hero/Hero';
import Ytvideo from '../components/Videos/Videos';

class Main extends Component {
  state = {
    background:
      'url(https://res.cloudinary.com/mrs-k/image/upload/c_scale,w_2021/v1543539825/coins.jpg) fixed',
    height: '100vh'
  };

  render() {
    return (
      <div>
        <Hero
          title="Goodbye Debt, Hello Fun"
          para="We all want to live for more than just paying bills and dying."
          background={this.state.background}
          height={this.state.height}
        />
        <Container>
          <Row>
            <Col>
              <h3>Give Every Dollar A Job!</h3>
              <p>
                The secret is just to be intentional about what you want your
                money to do before you spend it. (Have we given away the secret
                sauce?) Take only the money you have on hand and ask yourself,
                “What should this money do before I’m paid again?” With just
                four simple steps, you’ll begin to take back control.
              </p>
              <h3>How Make It Happen Will Help</h3>
              <p>
                With 3 main areas to your financial planning we have laid out
                for you how you can view how your spending with the budget. How
                and when you will pay down any putstanding debts and finally how
                you can final reach that dream item or trip you have always
                wanted.
              </p>
              <h3>
                Here are some videos we recommend to understanding your
                financial position
              </h3>
            </Col>
          </Row>
        </Container>
        <Ytvideo />
      </div>
    );
  }
}

export default Main;
