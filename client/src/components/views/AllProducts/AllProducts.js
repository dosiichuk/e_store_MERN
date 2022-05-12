import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  fetchProductsRequest,
  getAll,
  getIsLoading,
} from '../../../redux/productsRedux';

import { ProductBox } from '../../common/ProductBox/ProductBox';
import { Spinner } from '../../common/Spinner/Spinner';

const Component = ({ fetchProducts, products, isLoading }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className='col-sm-12 col-md-9 col-lg-8 align-items-start mb-4'>
      <div className='row gy-3 gx-3 d-flex align-items-stretch justify-content-center'>
        {isLoading && <Spinner />}
        {products.map(product => (
          <ProductBox key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  products: getAll(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProductsRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Container as AllProducts, Component as AllProductsComponent };
