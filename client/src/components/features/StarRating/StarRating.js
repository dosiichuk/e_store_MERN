import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
// import { connect, ConnectedProps } from 'react-redux';
// import { Action } from 'redux';
// import { ThunkDispatch } from 'redux-thunk';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

// type PropsFromRedux = ConnectedProps<typeof connector>;

// interface Props extends PropsFromRedux {}

import styles from './StarRating.module.scss';

const Component = ({ className, children }) => {
  const [hoveredStar, setHoveredStar] = useState(null);
  // const dispatch = useDispatch();
  // const productsRatedByUser = useSelector(getAllProductsRatedByUser);
  // const productRatedByUser = productsRatedByUser.find(
  //   ratedProduct => ratedProduct.id === product.id
  // );
  // const stars = productRatedByUser ? productRatedByUser.userStars : product.stars;
  // const toggleStarRatedByUser = () => {
  //   if (!productRatedByUser && hoveredStar) {
  //     dispatch(addStarRating({ ...product, userStars: hoveredStar }));
  //   } else if (hoveredStar) {
  //     dispatch(editStarRating({ ...product, userStars: hoveredStar }));
  //   }
  // };
  const handleHover = e => {
    if (e.target.classList.contains('fa-star')) {
      setHoveredStar(e.target.getAttribute('data-id'));
    }
  };
  const pickIcon = i => {
    if (!hoveredStar) return faStar;
    if (hoveredStar < i) return farStar;
    return faStar;
  };

  return (
    <div className={styles.stars} onClick={toggleStarRatedByUser}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i}>
          {i <= stars ? (
            <FontAwesomeIcon
              icon={pickIcon(i)}
              // className={productRatedByUser || hoveredStar >= i ? styles.userStar : ''}
              data-id={i}
              onMouseEnter={handleHover}
              onMouseLeave={() => setHoveredStar(null)}
            >
              {i} stars
            </FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              // icon={hoveredStar >= i ? faStar : farStar}
              // data-id={i}
              // className={hoveredStar >= i ? styles.userStar : ''}
              onMouseEnter={handleHover}
              onMouseLeave={() => setHoveredStar(null)}
            >
              {i} stars
            </FontAwesomeIcon>
          )}
        </span>
      ))}
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
  Component as StarRating,
  // Container as StarRating,
  Component as StarRatingComponent,
};
