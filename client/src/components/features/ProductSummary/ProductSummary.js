import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, connect } from 'react-redux';
import clsx from 'clsx';
import { Card } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';

import styles from './ProductSummary.module.scss';
import { ReviewBoard } from '../ReviewBoard/ReviewBoard';
import { getProductById } from '../../../redux/productsRedux';
import { addToCart } from '../../../redux/cartRedux';
import { Gallery } from '../../views/Gallery/Gallery';

const Component = ({ className, addProductToCart }) => {
  const { id } = useParams();
  const history = useHistory();
  const product = useSelector(state => getProductById(state, id));
  if (!product) {
    history.push('/');
    return null;
  }
  return (
    <div className={clsx(className, styles.root)}>
      <Card body>
        <h2>{product.title}</h2>
        <p>Product description: {product.description}</p>
        <h5 style={{ fontWeight: '800' }}>Price: ${product.price}</h5>
        <h5>Additional photos:</h5>
        <Gallery imageUrlsArray={product.additionalPhotos} />
        <img
          src={product.image}
          alt={product.title}
          style={{ width: '100%', maxHeight: '50%' }}
        />
        <span className='btn d-block' onClick={() => addProductToCart(product)}>
          Add to cart
        </span>
      </Card>
      <ReviewBoard reviews={product.reviews} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(addToCart(product)),
});

const Container = connect(null, mapDispatchToProps)(Component);

Component.propTypes = {
  className: PropTypes.string,
  addProductToCart: PropTypes.func.isRequired,
};

export { Container as ProductSummary, Component as ProductSummaryComponent };
