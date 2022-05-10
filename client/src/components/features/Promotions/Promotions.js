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
            src='https://images.unsplash.com/photo-1509087859087-a384654eca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
            alt='ideas-1'
          />
          <div className={styles.promotionContent}>
            <h5 className={styles.title}>Desert look</h5>
            <a href='#' className='btn btn-primary btn-outline-light'>
              See details
            </a>
          </div>
        </div>
        <div className='col-md-6 p-2 position-relative'>
          <img
            className={styles.promotionImage}
            src='https://images.unsplash.com/photo-1465408953385-7c4627c29435?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            alt='ideas-1'
          />
          <div className={styles.promotionContent}>
            <h5 className={styles.title}>Desert look</h5>
            <a href='#' className='btn btn-primary btn-outline-light'>
              See details
            </a>
          </div>
        </div>
        <div className='col-12 p-2 position-relative'>
          <img
            className={styles.promotionImage}
            src='https://images.unsplash.com/photo-1465408953385-7c4627c29435?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            alt='ideas-1'
          />
          <div className={styles.promotionContent}>
            <h5 className={styles.title}>Autumn look</h5>
            <a href='#' className='btn btn-primary btn-outline-light'>
              See details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
