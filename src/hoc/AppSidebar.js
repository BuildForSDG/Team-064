// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { Nav, NavItem, NavLink } from 'reactstrap';

// eslint-disable-next-line no-unused-vars
const AppSidebar = ({ navConfig, ...props }) => {
  return (
    <Fragment>
      <Nav>
        {navConfig.map((data, index) => {
          return (
            <NavItem key={index}>
              <NavLink href={data.url}>{data.name}</NavLink>
            </NavItem>
          );
        })}
      </Nav>
    </Fragment>
  );
};

export default AppSidebar;
