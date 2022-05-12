import React from 'react';
import { ListGroup, ButtonGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeProductQuantity, removeFromCart } from '../../../redux/cartRedux';
import styles from './CartItem.module.scss';

const Component = ({ item, changeProductQuantityBy, removeProductFromCart }) => {
  return (
    <ListGroup.Item
      as='li'
      className='d-flex justify-content-between align-items-center'
    >
      <img className={styles.productImage} src={item.image} alt={item.title} />
      <div className='ms-2 me-auto'>
        <div className='fw-bold'>{item.title}</div>
        {item.description}
        <div className='fw-bold'>Unit price: ${item.price}</div>
      </div>

      <ButtonGroup>
        <Button
          onClick={() => {
            if (item.quantity > 1) {
              changeProductQuantityBy({ _id: item._id, changeBy: -1 });
            } else {
              removeProductFromCart(item._id);
            }
          }}
        >
          -
        </Button>
        <input
          style={{ width: '3rem', textAlign: 'center', fontWeight: '800' }}
          value={item.quantity}
        />
        <Button onClick={() => changeProductQuantityBy({ _id: item._id, changeBy: 1 })}>
          +
        </Button>
        <Button
          className='ml-2 d-block'
          onClick={() => removeProductFromCart(item._id)}
        >
          Remove
        </Button>
      </ButtonGroup>
    </ListGroup.Item>
  );
};
const mapDispatchToProps = dispatch => ({
  changeProductQuantityBy: ({ _id, changeBy }) =>
    dispatch(changeProductQuantity({ _id, changeBy })),
  removeProductFromCart: _id => dispatch(removeFromCart(_id)),
});

const Container = connect(null, mapDispatchToProps)(Component);
export { Container as CartItem, Component as CartItemComponent };
