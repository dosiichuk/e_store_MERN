import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import styles from './ContactSection.module.scss';

const ContactSection = () => {
  return (
    <section className={styles.contact}>
      <div className='container'>
        <div className='row'>
          <div className='newsletter-col col-md-4'>
            <div className='box px-5 mb-3'>
              <h3>Newsletter</h3>
              <p>Sign up to receive our newsletter with the best offers.</p>
              <form>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                  />
                  <small id='emailHelp' className='form-text text-muted'>
                    We&apos;ll never share your email with anyone else.
                  </small>
                </div>
                <button type='submit' className='btn btn-primary'>
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className='name-col col-md-4'>
            <div className='box px-5 mb-3'>
              <h3>Computer store</h3>
              <p>Visit our social media pages.</p>
              <div className='icon-box'>
                <a href='#'>
                  <FaTwitter className='mx-2' />
                </a>
                <a href='#'>
                  <FaInstagram className='mx-2' />
                </a>
                <a href='#'>
                  <FaTwitter className='mx-2' />
                </a>
                <a href='#'>
                  <FaYoutube className='mx-2' />
                </a>
              </div>
            </div>
          </div>
          <div className='contact-col col-md-4'>
            <div className='box px-5 mb-3'>
              <h3>Contact Us</h3>
              <p className='m-0'>2798 Brisbane Road</p>
              <p className='m-0'>Dull City 78dfg6 Slivonia</p>
              <a href='#'>support@company.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
