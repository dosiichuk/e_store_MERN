import Link from 'next/link';
import { Button, Card, ListGroup } from 'react-bootstrap';
import CartItem from '../../common/CartItem/CartItem';
import Filter from '../Filter/Filter';
import OrderSummary from '../OrderSummary/OrderSummary';

import styles from './Cart.module.scss';

const Cart = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-4 col-lg-4">
        {/* <img src="https://images.unsplash.com/photo-1509087859087-a384654eca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" /> */}
        <Filter />
      </div>
      <div className="col-sm-12 col-md-8 col-lg-8">
        <Card body>
          <h2>Prouct name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus libero ipsum fuga rerum id sit unde quis incidunt
            voluptates. Molestiae quaerat voluptatibus cupiditate delectus!
          </p>
          <ListGroup as="ul">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </ListGroup>
          <OrderSummary />
          <Link href="/cart/checkout">
            <span className="btn">Proceed to checkout</span>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
