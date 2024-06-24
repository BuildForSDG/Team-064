// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react';

export default function Side(items) {
  return (
    <Fragment>
      <ListGroup variant="flush">
        {
        items.map(({
          label, name, items: subItems, ...rest
        }) => (
          <ListGroup.Item style={{ paddingLeft: 18 }} key={name} button {...rest}>
            {label}
            {Array.isArray(subItems) ? (
              <ListGroup>
                {subItems.map((subItem) => (
                  <ListGroup.Item key={subItem.name} button>
                    {subItem.label}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : null}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Fragment>
  );
}
