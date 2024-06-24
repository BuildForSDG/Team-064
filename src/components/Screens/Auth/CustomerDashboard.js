/* eslint-disable no-unused-vars */
import React, { Component, Fragment, Suspence } from 'react';
import { Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const customer = React.lazy(() => import('../../Navigations/Sidedrawer/CustomerSidebar'));

class CustomerDashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {};
  }

  // eslint-disable-next-line class-methods-use-this
  toggle(e) {}

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col className="w-25">
              <Suspence>
                <CustomerSidebar />
              </Suspence>
            </Col>
            <Col className="w-75">Hello</Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default CustomerDashboard;
