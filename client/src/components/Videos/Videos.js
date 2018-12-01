import React from 'react';
import YouTube from 'react-youtube';
import { Container, Row, Col, Button } from 'reactstrap';

class Ytvideo extends React.Component {
  render() {
    const opts = {
      height: '200',
      width: '360',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <Container>
        <Row className="fluid">
          <Col md="4">
            <YouTube
              videoId="Q5jlY8_WmEE"
              opts={opts}
              onReady={this._onReady}
            />
          </Col>
          <Col md="4">
            <YouTube
              videoId="BOrcOJSoNFU"
              opts={opts}
              onReady={this._onReady}
            />
          </Col>
          <Col md="4">
            <YouTube
              videoId="X7rJynw4wNg"
              opts={opts}
              onReady={this._onReady}
            />
          </Col>
        </Row>
      </Container>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Ytvideo;
