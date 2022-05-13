import React from 'react';
import { Container } from 'react-bootstrap';
import Cart from '../../features/Cart/Cart';

const Component = () => {
  return (
    <Container className='mt-4'>
      <Cart />
    </Container>
  );
};

export { Component as Cart, Component as CartComponent };
