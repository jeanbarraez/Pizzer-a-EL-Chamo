import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

const Header = () => {
  const { totalItems } = useContext(CartContext);
  
  return (
    <Navbar bg="danger" variant="dark" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
          🍕 Pizzería El Chamo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="fs-5">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="fs-5">
              Menú
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to="/carrito"
              className="position-relative d-flex align-items-center fs-5"
            >
              <FaShoppingCart className="me-2" />
              {totalItems > 0 && (
                <Badge
                  bg="warning"
                  text="dark"
                  className="position-absolute top-0 start-100 translate-middle rounded-pill"
                  style={{ fontSize: '0.75rem' }}
                >
                  {totalItems}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
