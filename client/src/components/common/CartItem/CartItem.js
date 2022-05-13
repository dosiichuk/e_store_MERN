import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

import { AmountWidget } from '../AmountWidget/AmountWidget';
import styles from './CartItem.module.scss';

const Component = ({ item }) => {
  return (
    <ListGroup.Item
      as='li'
      className='d-flex flex-column flex-md-row justify-content-between align-items-center'
    >
      <img className={styles.productImage} src={item.image} alt={item.title} />
      <div className='ms-2 me-auto'>
        <div className='fw-bold'>{item.title}</div>
        {item.description}
        <div className='fw-bold'>Unit price: ${item.price}</div>
      </div>

      <AmountWidget quantity={item.quantity} _id={item._id} />
    </ListGroup.Item>
  );
};

Component.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
  }),
};

export { Component as CartItem, Component as CartItemComponent };
