import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

import styles from './Review.module.scss';

const Component = ({ className, review }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <ListGroup.Item
        as='li'
        className='d-flex justify-content-between align-items-start'
      >
        <img
          className={styles.userImage}
          alt={review._id}
          src='https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        />
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>{review.userName}</div>
          {review.text}
        </div>
      </ListGroup.Item>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  review: PropTypes.shape({
    _id: PropTypes.string,
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
  }),
};

export { Component as Review, Component as ReviewComponent };
