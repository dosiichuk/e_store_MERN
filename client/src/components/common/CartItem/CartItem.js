import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { addNoteToItem } from '../../../redux/cartRedux';
import { AmountWidget } from '../AmountWidget/AmountWidget';
import styles from './CartItem.module.scss';

const Component = ({ item, addUserNote }) => {
  const [userNote, setUserNote] = useState('');
  const handleChange = e => {
    setUserNote(e.target.value);
    addUserNote({ _id: item._id, userNote });
  };
  return (
    <ListGroup.Item as='li'>
      <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
        <img className={styles.productImage} src={item.image} alt={item.title} />
        <div className='ms-2 me-auto'>
          <div className='fw-bold'>{item.title}</div>
          {item.description}
          <div className='fw-bold'>Unit price: ${item.price}</div>
        </div>

        <AmountWidget quantity={item.quantity} _id={item._id} />
      </div>
      <div className='form-group'>
        <input
          type='textarea'
          className='form-control'
          id='userNote'
          aria-describedby='userNote'
          placeholder='Any notes to this item?'
          value={userNote}
          onChange={handleChange}
        />
        <small id='emailHelp' className='form-text text-muted'>
          Please provide any comments to the order.
        </small>
      </div>
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
  addUserNote: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  addUserNote: ({ _id, userNote }) => dispatch(addNoteToItem({ _id, userNote })),
});
const Container = connect(null, mapDispatchToProps)(Component);

export { Container as CartItem, Component as CartItemComponent };
