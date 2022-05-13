import React from 'react';

import clsx from 'clsx';
import { Card, ListGroup } from 'react-bootstrap';

import styles from './ReviewBoard.module.scss';
import { Review } from '../../common/Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';

const Component = ({ className, reviews }) => {
  if (!reviews || reviews.length === 0)
    return (
      <div>
        <div>No reviews for this product. Maybe add one!</div>
        <ReviewForm />
      </div>
    );
  return (
    <div className={clsx(className, styles.root)}>
      <h2 className='pt-5'>Product reviews</h2>
      <Card body>
        <ListGroup as='ul'>
          {reviews.map(review => (
            <Review key={review._id} review={review} />
          ))}
        </ListGroup>

        <ReviewForm />
      </Card>
    </div>
  );
};

export { Component as ReviewBoard, Component as ReviewBoardComponent };
