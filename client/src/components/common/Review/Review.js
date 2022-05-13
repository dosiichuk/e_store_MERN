import React from 'react';
import clsx from 'clsx';
import { ListGroup } from 'react-bootstrap';

import styles from './Review.module.scss';

const Component = ({ className, review }) => {
  console.log('review from rev', review);
  return (
    <div className={clsx(className, styles.root)}>
      <ListGroup.Item
        as='li'
        className='d-flex justify-content-between align-items-start'
      >
        <img
          className={styles.userImage}
          alt={review._id}
          src='https://images.unsplash.com/photo-1509087859087-a384654eca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
        />
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>{review.userName}</div>
          {review.text}
        </div>
      </ListGroup.Item>
    </div>
  );
};

export { Component as Review, Component as ReviewComponent };
