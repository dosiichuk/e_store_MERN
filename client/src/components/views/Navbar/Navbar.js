import { Container, Navbar, NavDropdown, Nav, Button } from 'react-bootstrap';
import { FaCartPlus, FaPersonBooth } from 'react-icons/fa';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const NavbarComponent = () => {
  return (
    <Navbar className={styles.navbar} expand="lg">
      <Container>
        <Navbar.Brand href="/" className={styles.logo}>
          ShopPerFy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="w-100 d-flex flex-md-row">
            <Nav.Link href="#home" className="px-4">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="px-4">
              Link
            </Nav.Link>
            <NavDropdown
              className="px-4"
              title="Dropdown"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <div
              className={styles.buttonGroup + ' d-block btn-group'}
              role="group"
              aria-label="button-group"
            >
              <Link href="/cart">
                <span className="px-2 btn btn-primary">
                  <FaCartPlus />
                  <span className="px-2">Cart</span>
                </span>
              </Link>
              <Link href="/">
                <span className="px-2 btn btn-primary">
                  <FaPersonBooth />
                  <span className="px-2">Account</span>
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
