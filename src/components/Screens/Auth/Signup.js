/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Signup extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2 className="text-center text-uppercase mt-3">signup</h2>
          </Col>
        </Row>
        <Row>
          <Col className="mt-5 mx-auto" lg="8">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter location" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Enter phone number" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <div className="d-flex justify-content-center position-relative">
                <Button variant="primary" type="submit" className="mx-auto">
                  Signup
                </Button>
                <div className="spinner-grow position-absolute" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
