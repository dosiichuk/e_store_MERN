import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Filter = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h2>Categories</h2>
        </Card.Title>
        <Card.Text>
          Check out the products we offer across multiple categories.
        </Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>Laptops</ListGroupItem>
        <ListGroupItem>Phones</ListGroupItem>
        <ListGroupItem>Drones</ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default Filter;
