import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import styles from './ProductBox.module.scss';

const ProductBox = () => {
  return (
    <Card className='col-sm-9 col-md-6 col-lg-4 px-2 py-2'>
      <Card.Img
        variant='top'
        src='https://images.unsplash.com/photo-1611937663641-5cef5189d71b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <p className={styles.cardText}>
          Some quick example text to build on the card title and make up the bulk of the
          cards content.
        </p>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductBox;
