import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaTruck } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-white py-5">
      <Container className="py-4">
        <Row className="g-4">
          <Col md={4}>
            <h3 className="fw-bold mb-3">
              <FaTruck className="me-2" />
              TRANSPORTEJEAN
            </h3>
            <p>Servicios de fletes y mudanzas en Santiago de Chile y todo el país. Profesionalismo y confianza.</p>
          </Col>
          <Col md={4}>
            <h4 className="fw-bold mb-3">Contacto</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FaWhatsapp className="me-2 text-success" />
                <a href="https://wa.me/56986813898" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                  +56 9 8681 3898
                </a>
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2 text-danger" />
                <a href="mailto:jeanbarraez17@gmail.com" className="text-white text-decoration-none">
                  jeanbarraez17@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <FaInstagram className="me-2 text-danger" />
                <a href="https://instagram.com/transportejean" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                  @transportejean
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h4 className="fw-bold mb-3">Servicios</h4>
            <ul className="list-unstyled">
              <li className="mb-2">Mudanzas Residenciales</li>
              <li className="mb-2">Fletes de Carga</li>
              <li className="mb-2">Mudanzas de Oficina</li>
              <li className="mb-2">Servicios Interurbanos</li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">&copy; 2026 TRANSPORTEJEAN. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
