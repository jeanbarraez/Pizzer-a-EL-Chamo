import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { FaTruck } from "react-icons/fa";

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <BootstrapNavbar.Brand href="#home" className="fw-bold fs-3">
          <FaTruck className="me-2" />
          TRANSPORTEJEAN
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="fs-5">Inicio</Nav.Link>
            <Nav.Link href="#services" className="fs-5">Servicios</Nav.Link>
            <Nav.Link href="#gallery" className="fs-5">Galería</Nav.Link>
            <Nav.Link href="#quote" className="fs-5">Cotizar</Nav.Link>
            <Nav.Link href="#contact" className="fs-5">Contacto</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
