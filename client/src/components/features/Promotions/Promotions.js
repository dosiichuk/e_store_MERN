import React from 'react';
import styles from './Promotions.module.scss';

const Promotions = () => {
  return (
    <section className='py-5'>
      <h2 className='sectionTitle'>Check out the hot offers</h2>
      <div className={'row ' + styles.promotionsContainer}>
        <div className='col-md-6 p-2 position-relative'>
          <img
            className={styles.promotionImage}
            src='https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
            alt='ideas-1'
          />
          <div className={styles.promotionContent}>
            <h5 className={styles.title}>Cheapest offers</h5>
            <a href='/' className='btn btn-primary btn-outline-light'>
              See details
            </a>
          </div>
        </div>
        <div className='col-md-6 p-2 position-relative'>
          <img
            className={styles.promotionImage}
            src='https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            alt='ideas-1'
          />
          <div className={styles.promotionContent}>
            <h5 className={styles.title}>The most popular</h5>
            <a href='/' className='btn btn-primary btn-outline-light'>
              See details
            </a>
          </div>
        </div>
        <div className='col-12 p-2 position-relative'>
          <img
            className={styles.promotionImage}
            src='https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80'
            alt='ideas-1'
          />
          <div className={styles.promotionContent}>
            <h5 className={styles.title}>Highest rated</h5>
            <a href='/' className='btn btn-primary btn-outline-light'>
              See details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
