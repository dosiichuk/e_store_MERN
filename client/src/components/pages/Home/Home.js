import React from 'react';
import { Container } from 'react-bootstrap';
import Hero from '../../views/Hero/Hero';
import AllProducts from '../../views/AllProducts/AllProducts';
import Filter from '../../features/Filter/Filter';

// import { connect, ConnectedProps } from 'react-redux';
// import { Action } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// type PropsFromRedux = ConnectedProps<typeof connector>;

// interface Props extends PropsFromRedux {}

import styles from './Home.module.scss';

const Component = ({ propName }) => {
  return (
    <div>
      <Hero />
      <Container>
        <h2 className='sectionTitle'>Check out our products</h2>
        <div className='row'>
          <div className='col-sm-0 col-md-3 col-lg-4'>
            <Filter />
          </div>

          <AllProducts />
        </div>
      </Container>
    </div>
  );
};

// const mapStateToProps = (state: RootState) => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = (
//   dispatch: ThunkDispatch<RootState, undefined, Action>
// ) => ({
//   loadUserEvents: () => dispatch(loadUserEvents()),
// });

// const connector = connect(mapStateToProps, mapDispatchToProps);
// const Container = connector(Component);

export {
  Component as Home,
  // Container as Home,
  Component as HomeComponent,
};
