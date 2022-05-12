import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import Filter from '../../features/Filter/Filter';
import { CheckoutForm } from '../../features/CheckoutForm/CheckoutForm';
import { OrderSummary } from '../../features/OrderSummary/OrderSummary';
import { getCartProducts } from '../../../redux/cartRedux';

// import { connect, ConnectedProps } from 'react-redux';
// import { Action } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// type PropsFromRedux = ConnectedProps<typeof connector>;

// interface Props extends PropsFromRedux {}

const Component = ({ cartProducts }) => {
  return (
    <div className='mt-4'>
      <Container>
        <div className='row'>
          <div className='col-sm-12 col-md-4 col-lg-4'>
            {/* <img src="https://images.unsplash.com/photo-1509087859087-a384654eca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" /> */}
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

// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<RootState, undefined, Action>
// ) => ({
//   loadUserEvents: () => dispatch(loadUserEvents()),
// });

const ContainerComponent = connect(mapStateToProps, null)(Component);

export { ContainerComponent as Checkout, Component as CheckoutComponent };
