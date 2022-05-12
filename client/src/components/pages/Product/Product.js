import React from 'react';
import { Container } from 'react-bootstrap';
import { ProductSummary } from '../../features/ProductSummary/ProductSummary';
import Filter from '../../features/Filter/Filter';

const Component = ({ propName }) => {
  return (
    <Container className='mt-4'>
      <div className='row'>
        <div className='col-sm-12 col-md-4 col-lg-4'>
          {/* <img src="https://images.unsplash.com/photo-1509087859087-a384654eca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" /> */}
          <Filter />
        </div>
        <div className='col-sm-12 col-md-8 col-lg-8'>
          <ProductSummary />
        </div>
      </div>
    </Container>
  );
};

export { Component as Product, Component as ProductComponent };
