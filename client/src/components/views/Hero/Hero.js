import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item className={styles.carouselItem}>
        <img
          className={styles.carouselImage}
          src='https://images.unsplash.com/photo-1445205170230-053b83016050?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          alt='First slide'
        />
        <Carousel.Caption className={styles.carouselCaption}>
          <h3>First slide label</h3>
          <p className={styles.subtitle}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
          <button className='btn btn-large'>Shop now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <img
          className={styles.carouselImage}
          src='https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          alt='Second slide'
        />
        <Carousel.Caption className={styles.carouselCaption}>
          <h3>First slide label</h3>
          <p className={styles.subtitle}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
          <button className='btn btn-large'>Shop now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
