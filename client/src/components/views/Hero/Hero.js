import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item className={styles.carouselItem}>
        <img
          className={styles.carouselImage}
          src='https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80'
          alt='First slide'
        />
        <Carousel.Caption className={styles.carouselCaption}>
          <h3>First slide label</h3>
          <p className={styles.subtitle}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
          <button className='btn btn-large'>Signup</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <img
          className={styles.carouselImage}
          src='https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80'
          alt='Second slide'
        />
        <Carousel.Caption className={styles.carouselCaption}>
          <h3>First slide label</h3>
          <p className={styles.subtitle}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
          <button className='btn btn-large'>Signup</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.carouselItem}>
        <img
          className={styles.carouselImage}
          src='https://images.unsplash.com/photo-1511385348-a52b4a160dc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1207&q=80'
          alt='Second slide'
        />
        <Carousel.Caption className={styles.carouselCaption}>
          <h3>First slide label</h3>
          <p className={styles.subtitle}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
          <button className='btn btn-large'>Signup</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
