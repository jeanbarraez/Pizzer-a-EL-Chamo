import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="bg-primary text-white py-5">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-3 fw-bold mb-4">
              Fletes y Mudanzas en Santiago y Todo Chile
            </h1>
            <p className="fs-4 mb-5">
              Servicio profesional, rápido y seguro. Transportamos tu carga con la confianza que necesitas.
            </p>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
              <Button variant="light" size="lg" href="#quote" className="fw-bold">
                Cotizar Ahora
              </Button>
              <a
                href="https://wa.me/56986813898"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-lg fw-bold"
              >
                <FaWhatsapp className="me-2" />
                WhatsApp
              </a>
            </div>
          </Col>
          <Col md={6} className="mt-5 mt-md-0">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
                alt="Fletes y Mudanzas"
                className="img-fluid rounded shadow-lg"
              />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
