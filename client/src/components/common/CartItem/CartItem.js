import { ListGroup, ButtonGroup, Button } from 'react-bootstrap';

import styles from './CartItem.module.scss';

const CartItem = () => {
  return (
    <ListGroup.Item
      as='li'
      className='d-flex justify-content-between align-items-start'
    >
      <img
        className={styles.productImage}
        src='https://images.unsplash.com/photo-1509087859087-a384654eca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
      />
      <div className='ms-2 me-auto'>
        <div className='fw-bold'>Subheading</div>
        Cras justo odio
      </div>
      <ButtonGroup>
        <Button>-</Button>
        <input style={{ width: '3rem' }} />
        <Button>+</Button>
      </ButtonGroup>
    </ListGroup.Item>
  );
};

export default CartItem;
