/* eslint-disable no-unused-vars */

import React, { Component, Fragment, Suspense } from 'react';
import { Container, Row, Col } from 'reactstrap';
import routes from '../../route';
import Navigation from '../../_nav';
import AppHeader from '../../hoc/AppHeader';
import AppSidebar from '../../hoc/AppSidebar';

export default class CustomerDashboard extends Component {
  loading = () => <div>Loading...</div>;

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col>
              <Suspense>
                <AppHeader />
              </Suspense>
            </Col>
          </Row>
          <Row>
            <Col>
              <Suspense>
                <AppSidebar navConfig={Navigation} {...this.props} />
              </Suspense>
            </Col>
            <Col>
              <Container fluid>
                <Suspense fallback={this.loading()}>
                  <Switch>
                    {routes.map((route, idx) => {
                      return route.component ? (
                        <Route
                          key={idx}
                          path={route.path}
                          exact={route.exact}
                          name={route.name}
                          render={(props) => <route.component {...props} />}
                        />
                      ) : null;
                    })}
                    <Redirect from="/" to="/dashboard" />
                  </Switch>
                </Suspense>
              </Container>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
