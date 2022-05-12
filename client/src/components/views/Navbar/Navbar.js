import React from 'react';
import { Container, Navbar, NavDropdown, Nav, Button } from 'react-bootstrap';
import { FaCartPlus, FaPersonBooth } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartCount } from '../../../redux/cartRedux';
import styles from './Navbar.module.scss';

const NavbarComponent = () => {
  const cartCount = useSelector(getCartCount);
  return (
    <Navbar className={styles.navbar} expand='lg'>
      <Container>
        <Navbar.Brand href='/' className={styles.logo}>
          Computer Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav '>
          <Nav className='w-100 d-flex flex-md-row'>
            <div
              className={'btn-group ' + styles.buttonGroup}
              role='group'
              aria-label='button-group'
            >
              <Link to='/cart' className='mx-2'>
                <span className='px-2 btn btn-primary position-relative'>
                  <FaCartPlus />
                  <span className='px-2'>Cart</span>
                  {cartCount > 0 && (
                    <span className={styles.cartCount}>{cartCount}</span>
                  )}
                </span>
              </Link>
              <Link to='/' className='mx-2'>
                <span className='px-2 btn btn-primary'>
                  <FaPersonBooth />
                  <span className='px-2'>Account</span>
                </span>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
