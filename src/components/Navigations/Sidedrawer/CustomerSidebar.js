/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from 'react';
import Side from './Side';

class CustomerSidebar extends Component {
  render() {
    const { active, items } = this.props;
    return (
      <Fragment>
        <Side items={items} />
      </Fragment>
    );
  }
}

export default CustomerSidebar;
