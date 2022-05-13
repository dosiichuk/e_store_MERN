import React from 'react';
import { Container } from 'react-bootstrap';
import { ProductSummary } from '../../features/ProductSummary/ProductSummary';
import Filter from '../../features/Filter/Filter';

const Component = () => {
  return (
    <Container className='mt-4'>
      <div className='row'>
        <div className='col-sm-12 col-md-4 col-lg-4'>
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
