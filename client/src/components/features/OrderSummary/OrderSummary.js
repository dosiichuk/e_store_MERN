import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { getCartProducts } from '../../../redux/cartRedux';
import styles from './OrderSummary.module.scss';

const Component = ({ cartProducts }) => {
  return (
    <div>
      <Table bordered className={clsx('mt-4', styles.table)}>
        <thead>
          <tr>
            <th>Cart items:</th>
            <th>Price:</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.title}</td>
              <td>
                ${product.price} X {product.quantity} = $
                {product.price * product.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className='my-2'>
        Subtotal:{' '}
        <strong>
          ${cartProducts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}
        </strong>
      </div>
      <div className='my-2'>
        Shipping: <strong>$49.99</strong>
      </div>
      <div className='my-2'>
        Total:{' '}
        <strong>
          $
          {cartProducts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) +
            49.99}
        </strong>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cartProducts: getCartProducts(state),
});

const Container = connect(mapStateToProps, null)(Component);

Component.propTypes = {
  cartProducts: PropTypes.array,
};

export { Container as OrderSummary, Component as OrderSummaryComponent };
