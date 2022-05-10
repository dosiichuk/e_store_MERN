import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer + ' py-3'}>
      <div className='container'>
        <div className='row d-flex justify-content-around align-items-center'>
          <div className='col-md-4'>&copy; Harbinger Ltd.</div>
          <div className='col-md-6'>
            <ul className='list-inline m-0'>
              <li className='list-inline-item px-1'>
                <a href='#'>About</a>
              </li>
              <li className='list-inline-item px-1'>
                <a href='#'>Delivery</a>
              </li>
              <li className='list-inline-item px-1'>
                <a href='#'>Returns</a>
              </li>
              <li className='list-inline-item px-1'>
                <a href='#'>Privacy policy</a>
              </li>
              <li className='list-inline-item px-1'>
                <a href='#'>Terms and conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
