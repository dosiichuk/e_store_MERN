import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ButtonGroup, Button } from 'react-bootstrap';

import { changeProductQuantity, removeFromCart } from '../../../redux/cartRedux';

const Component = ({
  _id,
  quantity,
  changeProductQuantityBy,
  removeProductFromCart,
}) => {
  return (
    <div className='d-flex flex-row flex-sm-column align-items-stretch justify-content-stretch'>
      <ButtonGroup>
        <Button
          onClick={() => {
            if (quantity > 1) {
              changeProductQuantityBy({ _id, changeBy: -1 });
            } else {
              removeProductFromCart(_id);
            }
          }}
        >
          -
        </Button>
        <input
          style={{ width: '3rem', textAlign: 'center', fontWeight: '800' }}
          value={quantity}
          readOnly
        />
        <Button onClick={() => changeProductQuantityBy({ _id, changeBy: 1 })}>+</Button>
      </ButtonGroup>
      {}
      <Button
        className='ml-2 mt-sm-1 d-block'
        onClick={() => removeProductFromCart(_id)}
      >
        Remove
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  changeProductQuantityBy: ({ _id, changeBy }) =>
    dispatch(changeProductQuantity({ _id, changeBy })),
  removeProductFromCart: _id => dispatch(removeFromCart(_id)),
});

const Container = connect(null, mapDispatchToProps)(Component);

Component.propTypes = {
  _id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  changeProductQuantityBy: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};

export { Container as AmountWidget, Component as AmountWidgetComponent };
