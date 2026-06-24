import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row className="text-center">
          <Col>
            <h5 className="mb-3 fw-bold">🍕 Pizzería El Chamo</h5>
            <p className="mb-1">© 2024 Todos los derechos reservados</p>
            <p className="mb-0">¡Pizza con sabor a hogar!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
