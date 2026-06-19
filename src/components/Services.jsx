import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTruckMoving, FaBox, FaHome, FaRoute } from "react-icons/fa";
import imagenresidencial from "../image/imagenResidencial.webp";
import mudanzasdeOficinas from "../image/mudanzasdeOficinas.jpg";
import serviciosInterurbanos from "../image/mudanzaatodochile.jpg";
import fletesdeCarga from "../image/fletesycarga.jpg";
const Services = () => {
  const services = [
    {
      icon: <FaTruckMoving size={40} />,
      title: "Mudanzas Residenciales",
      description: "Cambios de casa con seguridad y cuidado de tus pertenencias.",
      image: imagenresidencial},
    {
      icon: <FaBox size={40} />,
      title: "Fletes de Carga",
      description: "Transporte de mercancías y encomiendas de cualquier tamaño.",
      image: fletesdeCarga,
    },
    {
      icon: <FaHome size={40} />,
      title: "Mudanzas de Oficina",
      description: "Reubicación empresarial con mínima interrupción.",
      image: mudanzasdeOficinas,
    },
    {
      icon: <FaRoute size={40} />,
      title: "Servicios Interurbanos",
      description: "Transporte a cualquier ciudad de Chile.",
      image: serviciosInterurbanos,
    },
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <Container className="py-5">
        <h2 className="text-center display-4 fw-bold mb-5">Nuestros Servicios</h2>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={3} key={index}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={service.image} height="200" style={{objectFit: 'cover'}} />
                <Card.Body className="text-center">
                  <div className="text-primary mb-3">{service.icon}</div>
                  <Card.Title className="fw-bold">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
