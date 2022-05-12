import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

// import { connect, ConnectedProps } from 'react-redux';
// import { Action } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// type PropsFromRedux = ConnectedProps<typeof connector>;

// interface Props extends PropsFromRedux {}

import styles from './ProductSummary.module.scss';
import { ReviewBoard } from '../ReviewBoard/ReviewBoard';
import { getProductById } from '../../../redux/productsRedux';

const Component = ({ className, children }) => {
  const { id } = useParams();
  const product = useSelector(state => getProductById(state, id));
  return (
    <div className={clsx(className, styles.root)}>
      <Card body>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: '100%', maxHeight: '50%' }}
        />
        <span className='btn d-block'>Add to cart</span>
      </Card>
      <ReviewBoard reviews={product.reviews} />
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
