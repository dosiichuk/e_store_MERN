import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import clsx from 'clsx';

// import { connect, ConnectedProps } from 'react-redux';
// import { Action } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// type PropsFromRedux = ConnectedProps<typeof connector>;

// interface Props extends PropsFromRedux {}
import { createOrderRequest } from '../../../redux/orderRedux';

import styles from './CheckoutForm.module.scss';
import { getCartProducts } from '../../../redux/cartRedux';
import { getUserData } from '../../../redux/authRedux';

const Component = ({ className, createOrder, cartProducts, userId }) => {
  const [email, setEmail] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userNotes, setUserNotes] = useState('');
  const submitHanler = e => {
    e.preventDefault();
    createOrder({
      user: userId,
      deliveryAddress,
      phoneNumber,
      products: cartProducts,
      userNotes,
      totalPrice: cartProducts.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      ),
    });
  };
  return (
    <div className={clsx(className, styles.root)}>
      <Form onSubmit={submitHanler}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='deliveryAddress'>
          <Form.Label>Delivery address:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Delivery address'
            value={deliveryAddress}
            onChange={e => setDeliveryAddress(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='phoneNumber'>
          <Form.Label>Phone number:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Phone number'
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='userNotes'>
          <Form.Label>Client's notes:</Form.Label>
          <Form.Control
            type='textarea'
            placeholder='Notes'
            value={userNotes}
            onChange={e => setUserNotes(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = state => ({
  cartProducts: getCartProducts(state),
  userId: getUserData(state).id,
});

const mapDispatchToProps = dispatch => ({
  createOrder: orderData => dispatch(createOrderRequest(orderData)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as CheckoutForm, Component as CheckoutFormComponent };
