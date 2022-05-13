import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'react-bootstrap';
import Promotions from '../../features/Promotions/Promotions';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
import NavbarComponent from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <main>{children}</main>
      <Container>
        <Promotions />
      </Container>
      <ContactSection />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
