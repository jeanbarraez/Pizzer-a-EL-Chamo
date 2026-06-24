import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, ListGroup } from 'react-bootstrap';
import { useContext } from 'react';
import products from '../data/products.json';
import { CartContext } from '../context/CartContext.jsx';
import { formatCurrency } from '../utils/helpers.js';

const PizzaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const pizza = products.find((p) => p.id === id);

  if (!pizza) {
    return (
      <Container className="py-5 text-center">
        <h2 className="mb-4">Pizza no encontrada</h2>
        <Button variant="danger" onClick={() => navigate('/menu')}>
          Volver al menú
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Button variant="outline-secondary" onClick={() => navigate('/menu')} className="mb-4">
        ← Volver al menú
      </Button>
      <Row>
        <Col lg={6} className="mb-4">
          <Card className="shadow-lg border-0">
            <Card.Img
              variant="top"
              src={pizza.image}
              alt={pizza.name}
              style={{ height: '450px', objectFit: 'cover' }}
            />
          </Card>
        </Col>
        <Col lg={6}>
          <div className="mb-3">
            <Badge bg="danger" className="me-2 fs-6">
              {pizza.category}
            </Badge>
            {pizza.tags.map((tag) => (
              <Badge key={tag} bg="light text-dark" className="me-1 fs-6">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="fw-bold mb-3 display-4">{pizza.name}</h1>
          <p className="lead text-muted mb-4 fs-4">{pizza.description}</p>
          <h2 className="text-danger fw-bold mb-4 fs-2">{formatCurrency(pizza.price)}</h2>
          <div className="mb-4">
            <h4 className="fw-bold mb-3">Ingredientes:</h4>
            <ListGroup variant="flush">
              {pizza.ingredients.map((ingredient, index) => (
                <ListGroup.Item key={index} className="fs-5">🍕 {ingredient}</ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <div className="mb-4 alert alert-info">
            <strong>⏱️ Tiempo de preparación:</strong> {pizza.preparationTime} minutos
          </div>
          <div className="d-flex flex-column gap-3">
            <Button
              variant="danger"
              size="lg"
              onClick={() => addToCart(pizza)}
              className="py-3 fs-5"
            >
              + Agregar al carrito
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PizzaDetail;
