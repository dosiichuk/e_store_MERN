import React, { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Card } from 'react-bootstrap';
// import { connect, ConnectedProps } from 'react-redux';
// import { Action } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// type PropsFromRedux = ConnectedProps<typeof connector>;

// interface Props extends PropsFromRedux {}

import styles from './ProductSummary.module.scss';
import { ReviewBoard } from '../ReviewBoard/ReviewBoard';

const Component = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>ProductSummary</h2>
      <Card body>
        <h2>Prouct name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
          libero ipsum fuga rerum id sit unde quis incidunt voluptates. Molestiae
          quaerat voluptatibus cupiditate delectus!
        </p>
        <Link href='/cart/checkout'>
          <span className='btn'>Proceed to checkout</span>
        </Link>
      </Card>
      <ReviewBoard />
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
  Component as ProductSummary,
  // Container as ProductSummary,
  Component as ProductSummaryComponent,
};
