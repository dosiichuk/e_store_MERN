import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from './ProductBox.module.scss';

const Component = ({ _id, image, title, price, description, rating, reviews }) => {
  return (
    <Card className='col-sm-9 col-md-5 col-lg-5 px-2 py-2 mx-2 clickable align-self-stretch cursor-pointer'>
      <Card.Img variant='top' className={styles.cardImage} src={image} />
      <Card.Body className='mt-auto'>
        <Card.Title className='d-inline'>{title}</Card.Title>
        <p className={styles.cardText}>{description}</p>
        <Link to={`/products/${_id}`} className={styles.infoButton + ' btn'}>
          Details
        </Link>
        <div className='d-flex align-items-center justify-content-between'>
          <Button variant='primary' className='d-block'>
            Add to cart!
          </Button>
          <span className={styles.priceTag}>${price}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export { Component as ProductBox };
