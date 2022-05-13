import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import Filter from '../../features/Filter/Filter';
import { CheckoutForm } from '../../features/CheckoutForm/CheckoutForm';
import { OrderSummary } from '../../features/OrderSummary/OrderSummary';
import { getCartProducts } from '../../../redux/cartRedux';

const Component = ({ cartProducts }) => {
  return (
    <div className='mt-4'>
      <Container>
        <div className='row'>
          <div className='col-sm-12 col-md-4 col-lg-4'>
            <Filter />
          </div>
          <div className='col-sm-12 col-md-8 col-lg-8'>
            <h2>Checkout</h2>
            {cartProducts.length > 0 && (
              <>
                <OrderSummary />
                <CheckoutForm />
              </>
            )}
            {cartProducts.length === 0 && (
              <div>There is nothing in your cart yet! Maybe add smth!</div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  cartProducts: getCartProducts(state),
});

const ContainerComponent = connect(mapStateToProps, null)(Component);

export { ContainerComponent as Checkout, Component as CheckoutComponent };
