import React from 'react';
import { Container } from 'react-bootstrap';
import Hero from '../../views/Hero/Hero';
import { AllProducts } from '../../views/AllProducts/AllProducts';
import Filter from '../../features/Filter/Filter';

const Component = ({ propName }) => {
  return (
    <div>
      <Hero />
      <Container>
        <h2 className='sectionTitle'>Check out our products</h2>
        <div className='row'>
          <div className='col-sm-0 col-md-3 col-lg-4'>
            <Filter />
          </div>

          <AllProducts />
        </div>
      </Container>
    </div>
  );
};

export { Component as Home, Component as HomeComponent };
