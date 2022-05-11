import React from 'react';

import clsx from 'clsx';
import { Card, ListGroup } from 'react-bootstrap';
// import { connect, ConnectedProps } from 'react-redux';
// import { Action } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// type PropsFromRedux = ConnectedProps<typeof connector>;

// interface Props extends PropsFromRedux {}

import styles from './ReviewBoard.module.scss';
import { Review } from '../../common/Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';

const Component = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>ReviewBoard</h2>
      <Card body>
        <h2>Prouct name</h2>

        <ListGroup as='ul'>
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </ListGroup>

        <ReviewForm />
      </Card>
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
  Component as ReviewBoard,
  // Container as ReviewBoard,
  Component as ReviewBoardComponent,
};
