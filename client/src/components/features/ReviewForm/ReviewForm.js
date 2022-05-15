import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import styles from './ReviewForm.module.scss';
import { getUserData } from '../../../redux/authRedux';
import { createReviewRequest } from '../../../redux/productsRedux';
import { useParams } from 'react-router-dom';

const Component = ({ className, userId, userName, sendReview }) => {
  const { id } = useParams();
  const [text, setText] = useState('');
  const submitHandler = e => {
    e.preventDefault();
    sendReview({ user: userId, product: id, text, userName });
    setText('');
  };

  return (
    <div className={clsx(className, styles.root, 'pt-4')}>
      <h2>Add review for this product</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Review (LOGIN FIRST!):</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter review text'
            autoComplete='false'
            value={text}
            onChange={e => setText(e.target.value)}
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

const mapStateToProps = state => ({
  userId: getUserData(state).id,
  userName: getUserData(state).name,
});

const mapDispatchToProps = dispatch => ({
  sendReview: reviewData => dispatch(createReviewRequest(reviewData)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

Component.propTypes = {
  className: PropTypes.string,
  userId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  sendReview: PropTypes.func.isRequired,
};

export { Container as ReviewForm, Component as ReviewFormComponent };
