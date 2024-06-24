/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Index extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Broomy</Navbar.Brand>
        </Navbar>
      </Fragment>
    );
  }
}

export default Index;
