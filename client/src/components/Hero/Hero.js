import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Hero = props => {
  let titleText = props.title;
  let paraText = props.para;
  let background = props.background
  let backgroundSize = props.backgroundSize

  return (
    <div>
      <Jumbotron fluid style={{background: background, backgroundSize: backgroundSize }}>
        <Container fluid>
          <h1 className="display-3">{titleText} </h1>
          <p className="lead">{paraText}</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Hero;
