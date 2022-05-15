import React from 'react';

import styles from './Gallery.module.scss';

const Component = ({ imageUrlsArray }) => {
  return (
    <div className={styles.composition}>
      {imageUrlsArray.map((image, index) => {
        return (
          <img
            key={index}
            alt={`${index}`}
            className={styles.composition__photo}
            src={image}
          />
        );
      })}
    </div>
  );
};

export { Component as Gallery, Component as GalleryComponent };
