import React from 'react';
import clsx from 'clsx';
import { Form, Button } from 'react-bootstrap';
// import { connect, ConnectedProps } from 'react-redux';
// import { Action } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// type PropsFromRedux = ConnectedProps<typeof connector>;

// interface Props extends PropsFromRedux {}

import styles from './ReviewForm.module.scss';

const Component = ({ className, children }) => {
  return (
    <div className={clsx(className, styles.root, 'pt-4')}>
      <h2>ReviewForm</h2>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Review:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter review text'
            autoComplete='false'
          />
          <Form.Text className='text-muted'>
            Thank you for helping others to make choice!
          </Form.Text>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
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
  Component as ReviewForm,
  // Container as ReviewForm,
  Component as ReviewFormComponent,
};
