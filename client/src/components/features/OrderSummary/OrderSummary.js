import React from 'react';
import { Table } from 'react-bootstrap';
import clsx from 'clsx';
import styles from './OrderSummary.module.scss';

const OrderSummary = () => {
  return (
    <div>
      <Table bordered className={clsx('mt-4', styles.table)}>
        <thead>
          <tr>
            <th>First Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <div>Subtotal:</div>
      <div>Shipping:</div>
      <div>Total:</div>
    </div>
  );
};

export default OrderSummary;
