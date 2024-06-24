/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Profile extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col>
              <div className="card">
                <div className="mt-3 mb-4 text-capitalize text-center">
                  <h3>Profile</h3>
                </div>
                <div className="d-flex flex-row justify-content-between pl-5">
                  <div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <b>First Name:</b> Broomy{' '}
                      </li>
                      <li className="list-group-item">
                        <b>Last Name:</b> Clean
                      </li>
                      <li className="list-group-item">
                        <b>Email Address:</b> broomyclean@broomy.com
                      </li>
                      <li className="list-group-item">
                        <b>Phone Number:</b> 08070006900
                      </li>
                      <li className="list-group-item">
                        <b>Address:</b> cadastral zone wuse
                      </li>
                      <li className="list-group-item">
                        <b>Country:</b> Nigeria
                      </li>
                    </ul>
                  </div>
                  <div className="mt-3">
                    <img className="img-thumbnail mr-5" src="https://via.placeholder.com/200x150" alt="Card image" />
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <div>
                    <h4 className="text-capitalize text-center">order</h4>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Cras justo odio</li>
                      <li class="list-group-item">Dapibus ac facilisis in</li>
                      <li class="list-group-item">Morbi leo risus</li>
                      <li class="list-group-item">Porta ac consectetur ac</li>
                      <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-capitalize text-center">map</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Profile;
