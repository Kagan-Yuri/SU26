import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Menu = () => {
  return (
    <ListGroup variant="flush" style={{ fontSize: '14px' }}>
      <ListGroup.Item action href="#" className="text-primary border-0 ps-0">
        Home
      </ListGroup.Item>
      <ListGroup.Item action href="#" className="text-secondary border-0 ps-0">
        Features
      </ListGroup.Item>
      <ListGroup.Item action href="#" className="text-secondary border-0 ps-0">
        Pricing
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Menu;