import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../data/products.json';

const Home = () => {
  return (
    <>
      <div className="bg-light py-5">
        <Container className="text-center">
          <div className="py-5">
            <h1 className="display-4 fw-bold mb-4">🍕 ¡Bienvenido a Pizzería El Chamo!</h1>
            <p className="lead mb-5 fs-4">
              Las mejores pizzas artesanales de la ciudad, preparadas con ingredientes frescos y mucho amor.
            </p>
            <Button
              as={Link}
              to="/menu"
              variant="danger"
              size="lg"
              className="px-5 py-3 fs-5"
            >
              Ver Menú Completo
            </Button>
          </div>
        </Container>
      </div>
      
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold display-5">¿Por qué elegirnos?</h2>
        <Row className="text-center">
          <Col md={4} className="mb-4">
            <div className="p-4 h-100">
              <h3 className="fw-bold mb-3 text-danger">🥇 Calidad Premium</h3>
              <p className="fs-5">Ingredientes frescos y de la mejor calidad</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 h-100">
              <h3 className="fw-bold mb-3 text-danger">🚚 Delivery Rápido</h3>
              <p className="fs-5">Tu pizza caliente en menos de 45 minutos</p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="p-4 h-100">
              <h3 className="fw-bold mb-3 text-danger">💰 Mejores Precios</h3>
              <p className="fs-5">Calidad premium a precios accesibles</p>
            </div>
          </Col>
        </Row>
      </Container>
      
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold display-5">Nuestras Especialidades</h2>
        <Row className="g-4">
          {products.slice(0, 3).map((pizza) => (
            <Col md={4} key={pizza.id}>
              <Card className="h-100 shadow-lg border-0">
                <Card.Img
                  variant="top"
                  src={pizza.image}
                  alt={pizza.name}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold fs-4">{pizza.name}</Card.Title>
                  <Card.Text className="mb-3">{pizza.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-danger fw-bold fs-5">{pizza.price.toLocaleString('es-CL', {style: 'currency', currency: 'CLP', minimumFractionDigits:0})}</span>
                    <Button as={Link} to={`/pizza/${pizza.id}`} variant="danger">
                      Ver detalle
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
