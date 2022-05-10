import { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import Promotions from '../../features/Promotions/Promotions';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
import NavbarComponent from '../Navbar/Navbar';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
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

export default Layout;
