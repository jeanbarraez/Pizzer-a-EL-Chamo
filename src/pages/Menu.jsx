import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import products from '../data/products.json';
import { CartContext } from '../context/CartContext.jsx';
import { formatCurrency } from '../utils/helpers.js';

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5 fw-bold display-4">Nuestro Menú</h1>
      <Row className="g-4">
        {products.map((pizza) => (
          <Col md={4} key={pizza.id}>
            <Card className="h-100 shadow-lg border-0">
              <Card.Img
                variant="top"
                src={pizza.image}
                alt={pizza.name}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column">
                <div className="mb-3">
                  <span className="badge bg-danger me-2">{pizza.category}</span>
                  {pizza.tags.map((tag) => (
                    <span key={tag} className="badge bg-light text-dark me-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <Card.Title className="fw-bold fs-3">{pizza.name}</Card.Title>
                <Card.Text className="text-muted flex-grow-1 mb-3">{pizza.description}</Card.Text>
                <div className="mb-3">
                  <small className="text-muted">⏱️ {pizza.preparationTime} minutos de preparación</small>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-danger fw-bold fs-4">{formatCurrency(pizza.price)}</span>
                </div>
                <div className="mt-3 d-flex gap-2">
                  <Button as={Link} to={`/pizza/${pizza.id}`} variant="outline-secondary" className="flex-grow-1">
                    Ver detalle
                  </Button>
                  <Button variant="danger" onClick={() => addToCart(pizza)} className="flex-grow-1">
                    + Carrito
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
