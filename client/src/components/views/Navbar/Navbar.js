import React, { useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaCartPlus, FaPersonBooth } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';
import { getLoginStatus, loginRequest, logoutSuccess } from '../../../redux/authRedux';
import { BASE_URL } from '../../../config';
import { getCartCount } from '../../../redux/cartRedux';
import styles from './Navbar.module.scss';

const Component = ({ login, loggedIn, logout }) => {
  useEffect(() => {
    login();
  }, []);

  const cartCount = useSelector(getCartCount);
  const handleLogin = () => {
    window.open(`${BASE_URL}/auth/google`, '_self');
  };
  const handleLogout = () => {
    logout();
    window.open(`${BASE_URL}/auth/auth.logout`, '_self');
  };
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

              {!loggedIn && (
                <span className='mx-2 px-2 btn btn-primary'>
                  <FaPersonBooth />
                  <span onClick={handleLogin} className='px-2'>
                    Login
                  </span>
                </span>
              )}
              {loggedIn && (
                <span className='mx-2 px-2 btn btn-primary'>
                  <FaPersonBooth />
                  <span onClick={handleLogout} className='px-2'>
                    Logout
                  </span>
                </span>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state, ownProps) => ({
  loggedIn: getLoginStatus(state),
});

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(loginRequest()),
  logout: () => dispatch(logoutSuccess()),
});

const NavbarComponent = connect(mapStateToProps, mapDispatchToProps)(Component);

export default NavbarComponent;
