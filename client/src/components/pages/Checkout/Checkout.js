import React from 'react';

// import { connect, ConnectedProps } from 'react-redux';
// import { Action } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// type PropsFromRedux = ConnectedProps<typeof connector>;

// interface Props extends PropsFromRedux {}

import styles from './Checkout.module.scss';

const Component = ({ propName }) => {
  return (
    <div>
      <Container>
        <h2 className='sectionTitle'>Checkout</h2>

        <div className='row'>
          <div className='col-sm-12 col-md-4 col-lg-4'>
            {/* <img src="https://images.unsplash.com/photo-1509087859087-a384654eca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" /> */}
            <Filter />
          </div>
          <div className='col-sm-12 col-md-8 col-lg-8'>
            <CheckoutForm />
          </div>
        </div>
      </Container>
    </div>
  );
};

// const mapStateToProps = (state: RootState) => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<RootState, undefined, Action>
// ) => ({
//   loadUserEvents: () => dispatch(loadUserEvents()),
// });

// const connector = connect(mapStateToProps, mapDispatchToProps);
// const Container = connector(Component);

export {
  Component as Checkout,
  // Container as Checkout,
  Component as CheckoutComponent,
};
