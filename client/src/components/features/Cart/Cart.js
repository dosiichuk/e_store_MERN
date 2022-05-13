import React from 'react';
import { Link } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { CartItem } from '../../common/CartItem/CartItem';
import Filter from '../Filter/Filter';
import { OrderSummary } from '../OrderSummary/OrderSummary';

import { getCartProducts } from '../../../redux/cartRedux';

const Cart = () => {
  const cartItems = useSelector(getCartProducts);
  if (cartItems.length === 0) return <div>Your cart is empty. Maybe buy smth!</div>;
  return (
    <div className='row'>
      <div className='col-sm-12 col-md-4 col-lg-4'>
        <Filter />
      </div>
      <div className='col-sm-12 col-md-8 col-lg-8'>
        <Card body>
          <h2>Your cart</h2>
          <p>Here is your cart. Maybe add smth more to it!</p>
          <ListGroup as='ul'>
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </ListGroup>
          <OrderSummary />
          <Link to='/cart/checkout'>
            <span className='btn'>Proceed to checkout</span>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
