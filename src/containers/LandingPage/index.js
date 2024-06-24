/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import NavBar from '../../components/Navigations/NavBar/index';
import './styles.css';

class LandingPage extends Component {
  render() {
    const customer = (
      <Fragment>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Submit
              <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
              <span className="sr-only">Loading...</span>
            </Button>
          </div>
        </Form>
      </Fragment>
    );
    const admin = (
      <Fragment>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="d-flex justify-content-center position-relative">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <div className="spinner-grow position-absolute" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </Form>
      </Fragment>
    );
    return (
      <Fragment>
        <Container className="mt-5">
          <Row className="mt-5">
            <Col></Col>
            <Col className="mt-5">
              <Jumbotron>
                <h1 className="text-center">Cleaner city initiative!</h1>
                <p className="text-center">support Broomy in the cleaning of a community.</p>
                <p className="d-flex justify-content-center">
                  <Button variant="primary" className="rounded-pill text-capitalize w-25">
                    donate
                  </Button>
                </p>
              </Jumbotron>
            </Col>
            <Col className="mt-5">
              <div className="text-center text-capitalize">
                <h4>
                  <a href="#">customer</a> | <a href="#">admin</a>
                </h4>
              </div>
              <div id="form-view">{customer}</div>
              <div className="d-flex justify-content-center mt-3">
                <h6>
                  forgot password
                  <Link to="/ForgotPassword"> click here </Link>
                  or
                  <Link to="/signup"> signup </Link>
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default LandingPage;
