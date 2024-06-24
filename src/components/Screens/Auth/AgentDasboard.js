/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class AgentDashboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="w-25">
            <Button href="#">my account</Button>
            <Button href="#">pickups</Button>
            <Button href="#">donate</Button>
            <Button href="#">history</Button>
            <Button href="#">support</Button>
            <Button href="#">about</Button>
          </Col>
          <Col className="w-75">Hello</Col>
        </Row>
      </Container>
    );
  }
}

export default AgentDashboard;
